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
  // console.log(req.body);
  //   res.send("Thanks for posting");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

// BMI Calculator
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  // body comes from body-parser
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = Math.floor(weight / Math.pow(height, 2));
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Calculator Server started on port 3000");
});
