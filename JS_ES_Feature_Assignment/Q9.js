"use strict";

// Q9: JSON Audit

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

// Parse and validate each JSON entry
for (let i = 0; i < rawData.length; i++) {
    try {
        const parsedData = JSON.parse(rawData[i]);

        // Check required keys
        if (
            parsedData.user === undefined ||
            parsedData.age === undefined
        ) {
            throw new Error("Missing required key: user or age");
        }

        // Convert age to a number
        const age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        cleanData.push({
            user: parsedData.user,
            age: age
        });

        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

// Filter users under 18
const under18Users = cleanData.filter(user => user.age < 18);

// Display the final report
console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Users Under 18:", under18Users);
console.log(`Valid Entries: ${cleanData.length}`);
console.log(`Invalid Entries: ${errors.length}`);