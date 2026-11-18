// Q5: Ride-Sharing Application using Classes

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            !Number.isFinite(Number(this.distance)) ||
            Number(this.distance) < 0
        ) {
            throw new Error("Please provide a valid distance.");
        }

        const farePerKm = 12;
        return Number(this.distance) * farePerKm;
    }
}

const user = new User("Aarav", 4.8);
const driver = new Driver("Rahul", 4.9, "Car", "UP85AB1234");

console.log("User:", user.name);
console.log("Driver:", driver.name);
console.log("Vehicle:", driver.vehicle);

try {
    const trip = new Trip("Mathura", "Agra", 60);

    console.log("Route:", trip.fromLocation, "to", trip.toLocation);
    console.log("Fare: Rs.", trip.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

// Test invalid distance.
try {
    const trip = new Trip("Mathura", "Delhi", -10);
    console.log(trip.calculateFare());
} catch (error) {
    console.log("Trip Error:", error.message);
}