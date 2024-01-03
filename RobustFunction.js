/*
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.
*/

function getPerson(person) {
  try {
    if (
      typeof person === "object" &&
      person !== null &&
      "name" in person &&
      "age" in person
    ) {
      const name = person.name;
      const age = person.age;
      return `Name:${name} \nAge:${age}`;
    } else {
      throw new Error("Invalid Parameter Type");
    }
  } catch (error) {
    return error.message;
  }
}
console.log(getPerson({ name: "Arvind", age: 28 }));
console.log(getPerson({ name: "Hitesh_Sir" })); //Invalid
