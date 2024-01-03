/*
1. Type Conversion.
Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.
*/
function typeConverter(string) {
  try {
    const result = Number(string);
    if (isNaN(result)) {
      throw new Error("Invalid Number");
    }
    return result;
  } catch (error) {
    return "Invalid Number";
  }
}

console.log(typeConverter("12 34"));
console.log(typeConverter("234"));
