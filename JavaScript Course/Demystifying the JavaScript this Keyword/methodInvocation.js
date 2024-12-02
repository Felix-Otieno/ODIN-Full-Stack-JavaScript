let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // Honda

let brand = car.getBrand.bind(car);
console.log(brand()); // Honda
