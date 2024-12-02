function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}