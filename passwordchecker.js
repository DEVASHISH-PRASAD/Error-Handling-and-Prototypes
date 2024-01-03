/*
7. Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.
*/
class User {
  //properties
  userName;
  #password;
  //constructor
  constructor(u, p) {
    this.userName = u;
    this.#password = p;
  }
  getPassword() {
    return "*".repeat(this.#password.length);
  }
  setPassword(pswd) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,20}$/;
    if (passwordPattern.test(pswd)) {
      this.#password = pswd;
    } else {
      console.error(
        "Password must contain atleast 8 characters including one uppercase character and one number"
      );
    }
  }
}

//object creation
const user = new User("Dev@123", "good*098");
console.log(user.getPassword());
user.setPassword("abcd"); // Invalid Password
user.setPassword("AbcD$1243dfgs"); // valid password
console.log(user.getPassword());
