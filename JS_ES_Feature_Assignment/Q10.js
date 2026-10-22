"use strict";

// Q10: Nested Hoisting and Closures

function outer() {
    // Outer function's count is hoisted but not initialized yet
    console.log(count);

    var count = 5;

    // Inner function has its own separate count variable
    function inner() {
        console.log(count);

        var count = 10;
    }

    inner();
}

outer();

// Convert inner function to an arrow function
function outerWithArrow() {
    console.log(count);

    var count = 5;

    // Arrow function uses the outer count because there is no
    // separate inner count declaration
    const inner = () => {
        console.log(count);
    };

    inner();
}

outerWithArrow();