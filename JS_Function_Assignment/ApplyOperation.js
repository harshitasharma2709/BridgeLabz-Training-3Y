// Q2: Apply Operation using callback

// Apply a given operation to each number
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubledNumbers = applyOperation(numbers, number => number * 2);
console.log("Doubled:", doubledNumbers);

// Square each number
const squaredNumbers = applyOperation(numbers, number => number * number);
console.log("Squared:", squaredNumbers);