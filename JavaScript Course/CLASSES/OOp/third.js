class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vehicleDetails() {
        console.log(`make: ${this.make}`);
        console.log(`model: ${this.model}`);
        console.log(`year: ${this.year}`);
        
    }


}

class Car extends Vehicle {
    constructor(make, model, year, doorNumber) {
        super(make, model, year);
        this.doorNumber = doorNumber;

    }
    carDetails() {
        super.vehicleDetails();
        console.log(`door number: ${this.doorNumber}`);
    }
}

const car = new Car("Toyota", "mark x", 2014, 4);
car.carDetails();