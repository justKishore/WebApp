const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //   res.send("Hello World!");
  //   __dirname gives the current directory name
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  //   res.send("Thanks for posting");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
  console.log("Calculator Server started on port 3000");
});
