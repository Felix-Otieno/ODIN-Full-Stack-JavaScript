class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName; // Use an underscore for internal storage
        this._lastName = lastName;
        this._hasJob = false; // Default value
    }

    // Getter for fullName
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter for firstName
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }

    // Setter for lastName
    set lastName(newLastName) {
        this._lastName = newLastName;
    }
}

// Creating a new Person instance
const person1 = new Person("Karanja", "Owour");

console.log(person1.fullName); // Karanja Owour

// Use the setter to change the first name
person1.firstName = "Steve";
console.log(person1.fullName); // Steve Owour

// Use the setter to change the last name
person1.lastName = "Otieno";
console.log(person1.fullName); // Steve Otieno

// Check the updated object
console.log(person1);
