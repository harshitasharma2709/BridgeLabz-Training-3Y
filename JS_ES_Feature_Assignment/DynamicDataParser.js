"use strict";

// Q1: Dynamic Data Parser

const apiData = [
    "25", "true", "false", "NaN",
    "                     ", "100px", "3.14",
    null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

// Check and convert each API value
for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Skip NaN, blank strings, and values like "100px"
    const isInvalid =
        value === undefined ||
        (typeof value === "string" &&
            (value.trim() === "" || Number.isNaN(numberValue))) ||
        (typeof value === "string" && value.trim() === "NaN");

    if (isInvalid) {
        invalidNumbers.push(value);
        console.log(`Invalid value: "${stringValue}"`);
    } else {
        validNumbers.push(numberValue);
    }

    console.log(
        `Original: ${String(value)} | Number: ${numberValue} | ` +
        `Boolean: ${booleanValue} | String: "${stringValue}"`
    );
}

// Display final reports
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);