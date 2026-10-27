// Q1: Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable inside the function
    let salary = 40000;
    let totalSalary = salary;

    // Add bonus only for permanent employees
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ₹${totalSalary}`);
}

// Test with both values
calculateSalary(true);
calculateSalary(false);

// Global bonus remains unchanged
console.log(`Global Bonus: ₹${bonus}`);