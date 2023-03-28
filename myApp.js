require('dotenv').config()
let express = require('express');
let app = express();

const absoultePath = __dirname + '/views/index.html';
const publicAbsoultePath = __dirname + '/public'

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

app.get("/", (req, res) => {
  res.sendFile(absoultePath);
});

app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});

app.use('/public', express.static(publicAbsoultePath))



module.exports = app;
