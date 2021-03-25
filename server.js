var express = require("express");
cors = require("cors")
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);
console.log("server started.." + port);
