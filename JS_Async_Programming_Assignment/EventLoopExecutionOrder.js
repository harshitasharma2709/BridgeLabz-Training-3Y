// Q9: Predict and explain JavaScript execution order.

/*
Predicted output:

Script start
Script end
Promise callback
Timeout callback

Explanation:
1. Synchronous statements execute first.
2. Promise.then() is a microtask.
3. setTimeout() is a macrotask.
4. Microtasks execute before macrotasks after
   the synchronous code finishes.
*/

// Synchronous statement
console.log("Script start");

// Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous statement
console.log("Script end");