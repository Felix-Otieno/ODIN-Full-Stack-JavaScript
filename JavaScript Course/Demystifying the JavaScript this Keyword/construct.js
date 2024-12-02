function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let car = new Car('Honda');
console.log(car.getBrand());