// Q5: Boolean Logic Access System

// Define the security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

// Use logical operators to determine the result
if (isSecure && !(!isDoorLocked || !isWindowClosed)) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another outcome by changing a value
isWindowClosed = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");