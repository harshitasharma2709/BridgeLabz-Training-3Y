// Q2: Demonstrate the JavaScript Event Loop.

// Synchronous execution starts first.
console.log("Start");

// setTimeout callback is a macrotask.
setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

// Promise callback is a microtask.
Promise.resolve().then(() => {
    console.log("Microtask: Promise callback");
});

// Another synchronous statement.
console.log("Synchronous log");

// End of synchronous code.
console.log("End");

// Explanation:
// JavaScript first executes all synchronous code.
// After that, it executes microtasks such as Promise.then().
// Once the microtask queue is empty, macrotasks such as
// setTimeout() callbacks are executed.