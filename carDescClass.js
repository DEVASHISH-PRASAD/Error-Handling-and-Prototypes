/*
3. Car Description Class.
Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method.
*/
class Car {
  //properties
  company;
  model;
  year;
  //constructor
  constructor(c, m, y) {
    this.company = c;
    this.model = m;
    this.year = y;
  }
  //behaviour
  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}
const car1 = new Car("Tesla", "Model 3", 2020);

console.log(car1.getDescription());
