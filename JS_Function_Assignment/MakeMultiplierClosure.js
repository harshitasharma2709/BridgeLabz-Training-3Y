// Q7: Closure example

function makeMultiplier(multiplier) {
    // Inner function remembers the multiplier
    return function (number) {
        return number * multiplier;
    };
}

// Create functions with different multipliers
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// Call the returned functions
console.log("Double of 5:", double(5));
console.log("Triple of 5:", triple(5));
console.log("Triple of 10:", triple(10));