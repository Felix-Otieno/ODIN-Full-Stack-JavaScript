import User from "./user.js";

const user = new User("Kevin", 12);
console.log(user);
user.printName(); // Call the method on the instance
user.printAge();  // Call the method on the instance
