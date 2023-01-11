var express = require('express');
var cors = require('cors');
require('dotenv').config()
const bodyParser = require("body-parser");
var app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// /api/fileanalyse
app.post("/api/fileanalyse", upload.single('upfile'), uploadFiles);
function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.file);
  //When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

  let name = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;
  res.json({ name: name, type: type, size: size });
}

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
