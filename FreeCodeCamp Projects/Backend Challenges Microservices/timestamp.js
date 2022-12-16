// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/", function (req, res) {
    let now = Date.now();
    let date = new Date(now).toUTCString();
    console.log(date)
     res.json({unix: Date.now(), utc: date})
});
// your first API endpoint... 
app.get("/api/:time", function (req, res) {
  let whichType = Date.parse(req.params.time)
  if (whichType) {
      let unix = new Date (req.params.time).getTime();
  let UTCSTRING = new Date (req.params.time).toUTCString();
  res.json({"unix": unix, "utc": UTCSTRING});
  }
  else {
    if (new Date(Number(req.params.time)).toUTCString()=='Invalid Date') res.json({error: 'Invalid Date'})
    console.log(req.params.time)
    let utc = new Date(Number(req.params.time)).toUTCString();
    res.json({unix: Number(req.params.time), utc: utc})
  };
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
