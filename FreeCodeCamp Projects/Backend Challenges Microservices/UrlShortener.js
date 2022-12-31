require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
//required to parse req body 
const bodyParser = require("body-parser");
//required to check for valid urls
const urlparser = require('url');
// dns
const dns = require('dns');
//connect to mongoDB atlas and setup mongoose
const mongodb = require('mongodb');
const mongoose = require('mongoose');


mongoose.connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

//database schema

const linkSchema= new mongoose.Schema({
  original: { type: String, required: true},
  short : {type: Number, required: true, default: 0}
});

const Url = mongoose.model("Url", linkSchema);

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', function(req,res){
  console.log(req.body)
  //return the original url
  let input = req.body.url
  let parsedinput = urlparser.parse(input).hostname;
  dns.lookup(parsedinput, (lookupErr, addresses) => {
    if (lookupErr) {
      console.log('error during lookup');
    };
    //returns error for invalid address
    if (!addresses) {
      res.json({error: 'invalid URL'});
    }
    else {
      Url.findOne({original: input}, (findOneErr, urlFound) => {
        //if theres an error
        if (findOneErr) {
        console.log('findOne error');
      }
      //if there isnt one, then create one
      if (!urlFound) {
        Url.estimatedDocumentCount((countErr, count) => {
          if (countErr) {
            res.send('estimatd document count error')
          }
          //new doc
          const url = new Url({original: input,
                              short: count + 1});
          url.save((saveErr, urlSaved) => {
            if (saveErr) {
              res.send('error saving new url');
            }
            res.json({original_url: urlSaved.original,
                     short_url: urlSaved.short});
          })
        })
      } //end of no url found
      //if there WAS a saved URL
      else {
        res.json({original_url: urlFound.original,
                 short_url: urlFound.short})
      };
      });
    }
  })
});
//getting an already entered url
app.get('/api/shorturl/:shorturl', (req,res) => {
  //destructuring the req parameter
  const { shorturl } = req.params;
  Url.findOne({short: shorturl }, (err, urlFound) => {
    if (err) {
      console.log('error retrieving the finding')
    }
    //if it isnt in database
    if (!urlFound) {
      res.json({error: 'no matching URL'})
    } else {
      res.redirect(urlFound.original);
    }
  })
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
