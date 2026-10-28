// Q4: Constructor function and prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Shared method on the prototype
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Create two car objects
const carOne = new Car("Toyota", "Fortuner");
const carTwo = new Car("Honda", "City");

// Call the shared method
carOne.getDetails();
carTwo.getDetails();

// Both objects share the same prototype method
console.log(
    "Method shared:",
    carOne.getDetails === carTwo.getDetails
);