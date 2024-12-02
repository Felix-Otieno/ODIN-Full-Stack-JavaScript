const example = {};
console.log(example.hasOwnProperty("prop")); // false

example.prop = "exists";
console.log(example.hasOwnProperty("prop")); // true - 'prop' has been defined

example.prop = null;
console.log(example.hasOwnProperty("prop")); // true - own property exists with value of null

example.prop = undefined;
console.log(example.hasOwnProperty("prop")); // true - own property exists with value of undefined
