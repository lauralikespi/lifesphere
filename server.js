var express = require('express');

var app = express();

/*
app.get("/", function (req, res) {
  res.send("Yay Node Girls!");
});
*/

app.use(express.static("public"));

app.listen(3000,function () {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});