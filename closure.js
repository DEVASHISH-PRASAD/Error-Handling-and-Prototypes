/*
9. Check the presence using closures.
Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise.
*/
function numberChecker(arr) {
  function checkNum(num) {
    if (num in arr) return true;
    else return false;
  }
  return checkNum;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numChecker = numberChecker(arr);
console.log(numChecker(68)); //false
console.log(numChecker(9)); //true
