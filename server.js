var express = require('express') 
var cors = require('cors')
var app = express()
app.use(cors())
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);
console.log("server started.." + port);
