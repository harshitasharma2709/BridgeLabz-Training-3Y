// Q1: Simulate an asynchronous coffee-making process.

// Function to boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Water boiled successfully.");
                resolve();
            } else {
                reject("Failed to boil water.");
            }
        }, 1500);
    });
}

// Function to brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed successfully.");
                resolve();
            } else {
                reject("Failed to brew coffee.");
            }
        }, 1500);
    });
}

// Function to pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into the cup.");
                resolve();
            } else {
                reject("Failed to pour coffee.");
            }
        }, 1500);
    });
}

// Execute all steps using Promise chaining
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee process failed:", error);
    });