const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
//required to parse req body 
const bodyParser = require("body-parser");

//connect to mongoDB atlas and setup mongoose
const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });
//database schema
const usernameSchema = new mongoose.Schema({
  username: { type: String, required: true },
});
const exercises = new mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, min: 1, required: true },
  date: { type: Date, default: Date.now }
})
const User = mongoose.model("new", usernameSchema);
const Exercises = mongoose.model("exercise", exercises);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', (req, res) => {
  let thisUser = req.body.username;
  console.log(thisUser);
  if (req.body.username === '') {
    return res.json({ error: 'username is required' });
  }
  User.findOne({ username: thisUser }, (findOneErr, userFound) => {
    //if theres an error
    if (findOneErr) {
      console.log('findOne error');
    }
    //if there isnt one, then create one
    if (!userFound) {
      const user = new User({ username: thisUser })
      user.save((saveErr, userSaved) => {
        if (saveErr) {
          res.send('error saving new user');
        }
        else {
          res.send({ username: userSaved.username, _id: userSaved._id })
        }
      })
    }
    //end of no url found
    //if there WAS a saved URL
    else {
      res.json({ error: 'username exists' });
    };
  });
});
// You can make a GET request to /api/users to get a list of all users
//
app.get('/api/users', async (req, res) => {
  let users = await User.find().lean();
  let response = [];
  for (let i = 0; i < users.length; i++) {
    response.push({ username: users[i].username, _id: users[i]._id })
  }
  res.send(response)
});

//You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
app.post('/api/users/:_id/exercises', function(req, res) {
  let userId = req.params._id;
  console.log(userId)
  let description = req.body.description;
  let duration = parseInt(req.body.duration);
  //the dang tests send both empty values AND no key/value at all. had to use devtools to find that almost none of the tests send an actual date
  let date = (req.body.date !== undefined ? new Date(req.body.date) : new Date());
  console.log(description, duration, date)
  //validation - have to add these for tests
  if (req.body.description === '') {
    return res.json({ error: 'description required' });
  }
  if (isNaN(duration)) {
    return res.json({ error: 'duration invalid' });
  }
  if (req.body.duration === '') {
    return res.json({ error: 'duration required' });
  }

  if (date == 'Invalid Date') {
    return res.json({ error: 'date is invalid' });
  }
  User.findById(userId, function(err, data) {
    if (!err && data !== null) {
      let newExercise = new Exercises({
        userId: userId,
        description: description,
        duration: duration,
        date: date
      });

      newExercise.save(function(err, moredata) {
        if (!err) {
          //The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
          return res.json({
            //from other schema
            username: data['username'],
            description: moredata['description'],
            duration: moredata['duration'],
            date: new Date(moredata['date']).toDateString(),

          });
        }
      });
    } else {
      return res.json({ error: 'user not found' });
    }
  });
});
// You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
app.get('/api/users/:_id/logs', function(req, res) {
  let userId = req.params._id;
  //from, to, limit
  let findConditions = { userId: userId };
  //if there are limits, validate they are usable
  if ((req.query.from !== undefined && req.query.from !== '') || (req.query.to !== undefined && req.query.to !== '')
  ) {
    findConditions.date = {};
    //$greater than or equal to
    if (req.query.from !== undefined && req.query.from !== '') {
      findConditions.date.$gte = new Date(req.query.from);
    }

    if (findConditions.date.$gte == 'Invalid Date') {
      return res.json({ error: 'from date invalid' });
    }
    //$lte = less than or equal to
    if (req.query.to !== undefined && req.query.to !== '') {
      findConditions.date.$lte = new Date(req.query.to);
    }
    if (findConditions.date.$lte == 'Invalid Date') {
      return res.json({ error: 'to date invalid' });
    }
  }


  let limit = (req.query.limit !== undefined && req.query.limit !== '' ? parseInt(req.query.limit) : 0);
  if (isNaN(limit)) {
    return res.json({ error: 'limit is not a number' });
  }
  //find requested user
  User.findById(userId, function(err, userResponse) {
    if (err) console.log('error finding user')
    // A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of   exercises that belong to that user.
    if (!err && userResponse !== null) {
      Exercises.find(findConditions).sort({ date: 'asc' }).limit(limit).exec(function(err, data) {
        if (!err) {
          console.log({
            username: userResponse['username'],
            count: data.length,
            _id: data['_id'],

            //A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
            log: data.map(function(exercise) {
              return {
                description: exercise.description,
                duration: exercise.duration,
                date: new Date(exercise.date).toDateString()
              }
            })
          });
          return res.json({
            username: userResponse['username'],
            count: data.length,
            _id: data['_id'],
            //A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
            log: data.map(function(exercise) {
              return {
                description: exercise.description,
                duration: exercise.duration,
                date: new Date(exercise.date).toDateString()
              };
            }),

          });
        }
      });
    } else {
      return res.json({ error: 'user not found' });
    }
  });
});
app.use((req, res, next) => {
  return next({ status: 404, message: 'not found' });
});
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
