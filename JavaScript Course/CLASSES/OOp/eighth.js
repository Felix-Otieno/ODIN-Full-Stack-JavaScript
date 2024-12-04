class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    animalSound() {
        console.log(`${this.species} make ${this.sound} sound`);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    animalSound() {
        super.animalSound();
        console.log(`${this.color} in colour`);
    }
}

const animal = new Animal("cat", "meow");
animal.animalSound();

const dog = new Dog("dog", "bark", "blackish");
dog.animalSound();