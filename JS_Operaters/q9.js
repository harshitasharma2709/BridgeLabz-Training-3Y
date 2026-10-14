// Q9: Odd-Even Number Analyzer

// Create an empty array to store results
let results = [];

// Check numbers from 1 to 30
for (let number = 1; number <= 30; number++) {
    let result;

    // Check divisibility by both 3 and 5 first
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    // Store the number and its classification
    results.push({
        Number: number,
        Result: result
    });
}

// Display all results
console.table(results);