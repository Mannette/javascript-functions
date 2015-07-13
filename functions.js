console.log ("Problem 1");
function sum (num1, num2) {
  return num1 + num2
};
sum(5, 6);
sum(120, 200);

console.log ("Problem 2");
function isEqual (x, y) {
  if (x === y) {
    return (true)
  } else {
    return (false)
  }
};
isEqual(5, 5);
isEqual(107, 68);

console.log("Problem 3");
function discountPercentage (Original, Discount) {
  var total = (Original * Discount)
  return total
  if (total > 100) {
    console.log("Warning! Discount over 100%! Not possible, please try again!");
  } else if (total < 0) {
    console.log("Warning! Discount under 0%! Not possible, please try again!");
    }
};
console.log();

console.log("Problem 4");
function stringCapitalize(str) {
var str = ("lets do this!")
str.slice(1)
}

console.log("Problem 5");
function evenNumbers(random){
  var random = Math.random () * 100-0;
  for (x = 0; x < random; x += 2){
    console.log(x);
  }
}
evenNumbers();
