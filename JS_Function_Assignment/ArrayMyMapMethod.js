// Q8: Create a custom myMap() method

// Add myMap method to the Array prototype
Array.prototype.myMap = function (callback) {
    const result = [];

    // Apply callback to every element
    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this));
    }

    return result;
};

// Test the custom method
const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(number => number * 2);
const squaredNumbers = numbers.myMap(number => number * number);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);