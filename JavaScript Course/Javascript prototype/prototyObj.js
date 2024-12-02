let foo = {
    bar: 1
};
console.log(foo.bar);
console.log(foo.hasOwnProperty("bar"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));