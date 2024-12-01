let father = {};
let son = {};
Object.setPrototypeOf(son, father);
Object.getPrototypeOf(son);
console.log(Object.getPrototypeOf(son));