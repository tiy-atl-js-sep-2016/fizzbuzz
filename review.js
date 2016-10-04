// Hard Mode
// Write a function with 3 arguments,
// sum the squares of the 2 highest arguments

var sumLargestSquares = function (x, y, z) {
  if (x <= y && x <= z) {
    return y*y + z*z;
  } else if (y <= x && y <= z) {
    return x*x + z*z;
  } else {
    return x*x + y*y;
  }
};

// Nightmare Mode
// Write a function that takes an argument
// and counts down to zero from that argument.
// NO LOOPS ALLOWED!

var countdown = function (n){
  if (n >= 0) {
    console.log(n);
    countdown(n - 1);
  }
};

// var countdown = function (n) {
//   if (n === 0) { return 0; }
//   console.log(n);
//   countdown(n - 1);
// };

// var badIdea = function () {
//   badIdea();
// };
