"use strict";

// Q7: Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide";

// Custom error for invalid operations
class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

try {
    let result;

    // Perform calculation based on the selected operation
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero.");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot find the real square root of a negative number.");
            }
            result = Math.sqrt(num1);
            break;

        case "subtract":
            result = num1 - num2;
            break;

        default:
            throw new InvalidOperationError(
                `Operation "${operation}" is not recognized.`
            );
    }

    console.log("Smart Calculator Summary");
    console.log(`Operation: ${operation}`);
    console.log(`Numbers: ${num1}, ${num2}`);
    console.log(`Result: ${result}`);
} catch (error) {
    console.log(`Error Type: ${error.name}`);
    console.log(`Message: ${error.message}`);
}