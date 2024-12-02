let obj = {}
console.log(Object.prototype);
console.log(Object.getPrototypeOf("obj"));

console.log(Object.prototype === Object.getPrototypeOf("obj"));
console.log(Object.prototype.isPrototypeOf("obj"));

Object.prototype.foo = "Hey there!";
console.log(Object.prototype);

console.log(obj.foo);