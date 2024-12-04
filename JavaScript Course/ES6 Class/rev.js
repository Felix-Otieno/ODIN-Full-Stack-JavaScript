class Home {
    constructor(name, type) {
        this._name = name; // Use _name for internal storage
        this._type = type; // Use _type for internal storage
        this.isPaint = true; // Default value
    }

    // Method to display home details
    displayDetails() {
        return `${this._name} ${this._type}`; // Use this._type
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    // Setter for type
    set type(newType) {
        this._type = newType; // Use this._type
    }
}

// Create a new Home object
const obj = new Home("Safari", "Storey building");
console.log(obj); // Initial object

// Update the name using the setter
obj.name = "Park Hill";
console.log(obj.displayDetails()); // Park Hill Storey building
