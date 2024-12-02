// Object Destructuring
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b, which are equivalent to:
// const a = obj.a;
// const b = obj.b;

console.log(a); // 1
console.log(b); // 2

// Array Destructuring
const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle ] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array
console.log(zerothEle); // 1
console.log(firstEle);  // 2

// Additional Example for Object Destructuring with Renaming
const person = { name: 'John', age: 30, location: 'New York' };
const { name: personName, age: personAge } = person;
console.log(personName); // 'John'
console.log(personAge);  // 30

// Additional Example for Array Destructuring with Skipping Items
const numbers = [10, 20, 30, 40, 50];
const [, second, , fourth] = numbers;
// This skips the first and third elements
console.log(second);  // 20
console.log(fourth);  // 40
