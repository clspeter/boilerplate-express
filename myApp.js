let express = require('express');
let app = express();

const absoultePath = __dirname + '/views/index.html';
const publicAbsoultePath = __dirname + '/public'

console.log(publicAbsoultePath);

app.get("/", (req, res) => {
  res.sendFile(absoultePath);
});

app.use('/public', express.static(publicAbsoultePath))

module.exports = app;
