function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;

    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }

    this.setFirstName = function(firstName) {
        this.firstName = firstName;
    }

    this.setLastName = function(lastName) {
        this.lastName = lastName;
    }
}

const person = new Person("Good", "Day");
console.log(person);
console.log(person.firstName);

const meth = person.fullName();
console.log(meth);

