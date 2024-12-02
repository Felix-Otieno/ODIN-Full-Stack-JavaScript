//Using call()
function introduce(greeting) {
    console.log(`${greeting}, I am ${this.name}.`);
  }
  
  const person = { name: "Charlie" };
  
  introduce.call(person, "Hello"); // Indirect invocation: Outputs "Hello, I am Charlie."

  //Using apply()
  introduce.apply(person, ["Hi"]); // Outputs "Hi, I am Charlie."

//Using bind()
const boundIntroduce = introduce.bind(person, "Hey");
boundIntroduce(); // Outputs "Hey, I am Charlie."
