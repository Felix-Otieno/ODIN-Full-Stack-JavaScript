class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(`The area of the rectangle is ${this.width * this.height}`);
    }

    perimeter() {
        console.log(`The perimeter of the rectangle is ${2 * (this.width + this.height)}`);
    }
}

const calculate = new Rectangle(4, 6);

calculate.area();       // Output: The area of the rectangle is 24
calculate.perimeter();  // Output: The perimeter of the rectangle is 20
