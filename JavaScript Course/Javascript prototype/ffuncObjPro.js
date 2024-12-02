function Factory() {
    this.foo = 1;
    this.bar = "string";

}

let descendants = new Factory();
console.log(Factory.prototype);
console.log(Object.getPrototypeOf(Factory.prototype));
console.log(Object.getPrototypeOf(Factory.prototype) === Object.prototype);
console.log(Object.prototype.isPrototypeOf(Factory.prototype));
Object.prototype.test = "I'm a property of Object.prototype";
console.log(Object.prototype);
console.log(Factory.prototype.test);
console.log(Factory.prototype);
console.log(descendants.test);