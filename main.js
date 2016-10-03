// for (var count = 0; count < 100; count++) {
//  if (count % 15 === 0) {
//    do this
//  }
//  if (count % 5 === 0) {
//    do that
//  }
//   ....
// }

var myName = "brit";

var fizzBuzz = function (highest) {
  console.log(myName);
  for (var count = 1; count <= highest; count++) {
    if (count % 15 === 0) {
      console.log("FizzBuzz");
    } else if (count % 5 === 0) {
      console.log("Buzz");
    } else if (count % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(count);
    }
  }
};

fizzBuzz(20);
