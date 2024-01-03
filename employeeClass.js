/*
4. Employee Class Challenge.
Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method.
*/
class Employee {
  //properties
  name;
  position;
  salary;
  constructor(n, p, s) {
    this.name = n;
    this.salary = s;
    this.position = p;
  }
  //behaviour
  getSalary() {
    return this.salary;
  }
}
const emp1 = new Employee("Devashish", "SDE2", 70000);
console.log(emp1.getSalary());
