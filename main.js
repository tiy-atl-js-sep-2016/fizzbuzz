var resultsBox = document.getElementById("fizzbuzz-nums");
var goButton = document.getElementById("fizzbuzz-go");

var processNumber = function (number) {
  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number.toString();
  }
};

var fizzBuzz = function (highest) {
  resultsBox.innerHTML = "";
  for (var count = 1; count <= highest; count++) {
    resultsBox.innerHTML += "<p>" + processNumber(count) + "</p>";
  }
};

var runFizzBuzz = function () {
  var textBox = document.getElementById("fizzbuzz-max");
  var fizzMax = Number(textBox.value);
  fizzBuzz(fizzMax);
};

// Higher Order Functions
// Functions that either
// A) Take another function as an argument
// B) Return a new function as a result

goButton.addEventListener("click", runFizzBuzz);
// eventName => "click", action => function () { .... }

// var addEventListener = function (eventName, action) { ... }
// eventName => "click", action => undefined
