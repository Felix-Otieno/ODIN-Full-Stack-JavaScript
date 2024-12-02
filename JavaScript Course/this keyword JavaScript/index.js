const userName = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        const arrowFunction = () => {
            console.log(this);
            console.log(this.firstName + " " + this.lastName);
        }
        arrowFunction();

    }
}
userName.fullName();