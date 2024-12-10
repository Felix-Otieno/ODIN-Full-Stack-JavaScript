// // const fs = require('fs'); // Use `const` for best practice
// let myNumber = undefined; // Use `let` since the value changes

// function addOne(callback) {
//   fs.readFile('number.txt', 'utf8', function doneReading(err, fileContents) {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }
//     myNumber = parseInt(fileContents, 10);
//     myNumber++;
//     callback(myNumber); // Call the callback with the updated number
//   });
// }

// addOne(function (updatedNumber) {
//   console.log(updatedNumber); // Logs the updated number after file reading is done
// });
