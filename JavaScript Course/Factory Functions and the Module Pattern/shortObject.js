const name = "Bob";
const age = 28;
const color = "red";

const thatObject = { name: name, age: age, color: color };

const nowFancyObject = { name, age, color };

// If you wanted to log these values, earlier,
// you would have done the following
console.log(name, age, color);
// which would have resulted in a mess - Bob 28 red

// Try wrapping it in some { curly braces } now,
// which makes it an object!
console.log({ name, age, color });
// now it logs as - { name: "Bob", age: 28, color: "red" }
