function Player(name, marks) {
    this.name = name;
    this.marks = marks;
    this.sayName = function() {
        console.log(`Is name is ${this.name}.`);
    }
}

const player1 = new Player("Marcos", "x");
console.log(player1.name); // Marcos
player1.sayName();
