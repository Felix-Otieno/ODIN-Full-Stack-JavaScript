function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        startEngine: function () {
            return `${this.make} ${this.model} engine started!`;
        },
        stopEngine: function () {
            return `${this.make} ${this.model} engine stopped.`;
        }
    };
}

// Using the factory function
const car1 = createCar('Toyota', 'Corolla', 2022);
const car2 = createCar('Honda', 'Civic', 2021);

console.log(car1.startEngine()); // Output: Toyota Corolla engine started!
console.log(car2.stopEngine());  // Output: Honda Civic engine stopped.
