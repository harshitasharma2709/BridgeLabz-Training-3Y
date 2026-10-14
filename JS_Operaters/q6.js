// Q6: Event-Based Counter Simulation

// Initialize the counter
let count = 0;

// Increase the counter
function increment() {
    // Nested function updates the outer count variable
    function updateCount() {
        count++;
    }

    updateCount();
    console.log(`Count after increment: ${count}`);
}

// Decrease the counter
function decrement() {
    // Nested function updates the outer count variable
    function updateCount() {
        count--;
    }

    updateCount();
    console.log(`Count after decrement: ${count}`);
}

// Simulate click events by calling functions
increment();
increment();
decrement();
increment();
decrement();