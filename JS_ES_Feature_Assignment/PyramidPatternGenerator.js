"use strict";

// Q6: Pyramid Pattern Generator

// Default number of rows
const userInput = 5;
const rows = Number(userInput);

// Validate input
if (Number.isInteger(rows) && rows > 0) {
    // Outer loop controls the number of rows
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        // Inner loop builds each row
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }
} else {
    console.log("Please enter a positive whole number.");
}

// Demonstration using var instead of let
console.log("Pattern using var:");

for (var i = 1; i <= 4; i++) {
    var line = "";

    for (var j = 1; j <= i; j++) {
        line += "* ";
    }

    console.log(line.trim());
}