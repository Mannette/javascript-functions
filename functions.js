console.log ("Problem 1");
function sum (num1, num2) {
  return num1 + num2
};
console.log( sum(5, 6) );
console.log( sum(120, 200) );

console.log ("Problem 2");
function isEqual (x, y) {
  if (x === y) {
    return (true)
  } else {
    return (false)
  }
};
console.log( isEqual(5, 5) );
console.log( isEqual(107, 68) );

console.log("Problem 3");
function discountPercentage (Original, Discount) {
  var total = (Discount * Original)
  if (total > 100) {
    return ("Warning! Discount over 100%! Not possible, please try again!");
  } else if (total < 0) {
    return ("Warning! Discount under 0%! Not possible, please try again!");
    }
};
