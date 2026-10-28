// Q1: Callback Greeting

// Callback function to display the ending message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Greet the user and execute the callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// Call the function
greetUser("Harshita", showEndMessage);