// var weirdAdder = function (name, base) {
//   var operand = null;
//   if (name === "Jack") {
//     operand = 7;
//   } else if (name === "Brit") {
//     operand = 4;
//   } else {
//     operand = 9;
//   }

//   return base + operand;
// };

var weirdAdder = function (name, base) {
  if (name === "Jack") {
    return 7 + base;
  } else if (name === "Brit") {
    return 4 + base;
  } else {
    return 9 + base;
  }
};
