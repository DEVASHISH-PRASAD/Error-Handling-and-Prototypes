/*
Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
constructor to set the values of name and age to "Unknown" and 0 if they are not provided.
*/
class Person {
  //properties
  name;
  age;
  constructor(n = "Unknown", a = 0) {
    this.name = n;
    this.age = a;
  }
  getDetails() {
    return `name:${this.name} age:${this.age}`;
  }
}
const person1 = new Person("Devashish Prasad", 20);
const person2 = new Person();
console.log(person1.getDetails());
console.log(person2.getDetails());
