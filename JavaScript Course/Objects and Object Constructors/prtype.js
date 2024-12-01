function ObjectFactory() {
    this.property = `Hi, I'm a property!`;

}

let obj = new ObjectFactory();
console.log(typeof ObjectFactory.prototype);
console.log(ObjectFactory.prototype.isPrototypeOf(obj));

ObjectFactory.prototype.prop = `I'm a property of ObjectFactory.prototype.`;
 console.log(obj);
 console.log(obj.prop);

