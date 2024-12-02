function Factory() {
    this.foo = 1;
    this.bar = "string";

}

let descendants = new Factory();
console.log(descendants);
console.log(Factory.prototype);