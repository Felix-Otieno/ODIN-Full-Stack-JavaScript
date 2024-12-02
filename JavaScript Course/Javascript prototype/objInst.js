function Factory() {
    this.foo = 1;
    this.bar = "string";

}
Factory.prototype.example = "I'm a property of Factory.prototype";
console.log(Factory.prototype);

let descendants = new Factory();
console.log(descendants);
console.log(descendants.example);