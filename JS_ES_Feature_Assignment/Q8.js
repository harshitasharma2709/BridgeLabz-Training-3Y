"use strict";

// Q8: Strict Mode Showdown

// Correct ES6 version
function demo(a, b) {
    // Declare total explicitly
    let total = 10;

    console.log(`First argument: ${a}`);
    console.log(`Second argument: ${b}`);
    console.log(`Total: ${total}`);
}

demo(5, 10);

// Demonstrate that total can be updated normally
let updatedTotal = 10;
updatedTotal = 20;
console.log(`Updated Total: ${updatedTotal}`);