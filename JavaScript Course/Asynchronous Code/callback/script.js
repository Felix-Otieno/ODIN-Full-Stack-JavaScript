let value = 1;

// Define the doSomething function
function doSomething(callback) {
  callback(); // Calls the passed callback function immediately
}

doSomething(() => {
  value = 2; // Updates `value` to 2
});

console.log(value); // Output: 2
