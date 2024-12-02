let y = [];
console.log(y.__proto__);
console.log(y.__proto__.__proto__);
console.log(y.__proto__ === Array.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(Array.prototype.isPrototypeOf(y));
console.log(Object.prototype.isPrototypeOf(Array));
console.log(y instanceof Array);