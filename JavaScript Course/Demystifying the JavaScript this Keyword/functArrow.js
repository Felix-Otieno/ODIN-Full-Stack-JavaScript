function Car() {
    this.speed = 120;
  }
  
  Car.prototype.getSpeed = () => {
    return this.speed;
  };
  
  var car = new Car();
  console.log(car.getSpeed()); // 👉 undefined