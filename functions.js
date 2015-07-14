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
  //var total = (Original * Discount);
  //var discountTotal = (Original - total);
  if ( (Discount > 1) || (Discount < 0) ) {
    return ("Warning!! Discount must be between 0% and 100%! Try again!");
  };
  else { return (Original * Discount)
  };
};
discountPercentage(100, .5)

console.log("Problem 4");
function stringCapitalize(str) {
  //return str.split(" ")
  /*---- Better way to do this that will work
  more universally? ----*/
  return (
str.charAt(0).toUpperCase() + str.substring(1, 4) + " " + str.charAt(5).toUpperCase() + str.substring(6, 7) + " " + str.charAt(8).toUpperCase() + str.substring(9, 12));
}
stringCapitalize("lets do this!");

console.log("Problem 5");
function evenNumbers(random){
  var random = Math.random () * 100-0;
  for (x = 0; x < random; x += 2) {
    console.log(x);
  }
}
evenNumbers();

console.log("Problem 6");
function isDivisible(divide1, divide2) {
  if (divide1 % divide2 === 0) {
    return (true)
  }
  else { return (false) };
};
isDivisible(600, 30)
isDivisible(523, 2)

console.log("Problem 7");
function oddNumbers() {
  console.log('running');
  var random = Math.round(Math.random() * 100 - 0);
  if (random < 40 ) {
  for (var x = 0; x <= 40; x++) {
  //  while (x < 40) {
      if (x % 2 == 1) {
        console.log(x);
      }
    //}
  };
} else {
  for (x = 100; x > 40; x--) {
  //  while (x < 100) {
      if (x % 2 == 1) {
        console.log(x);
      }
    //}
  };
}
};
oddNumbers();
