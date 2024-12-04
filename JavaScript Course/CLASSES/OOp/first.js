class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
     personDetails() {
          console.log(`${this.name} is ${this.age} years old and she comes from ${this.country}.`);
    }
}

const personObj1 = new Person("Alice", 25, "Kenya");
const personObj2 = new Person("Ruth", 29, "Uganda");

personObj1.personDetails();
personObj2.personDetails();
