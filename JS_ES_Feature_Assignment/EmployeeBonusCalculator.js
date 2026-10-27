"use strict";

// Q2: Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Process each employee
for (const employee of employees) {
    try {
        // Validate required properties
        if (
            !employee ||
            employee.salary === undefined ||
            employee.years === undefined ||
            employee.name === undefined
        ) {
            throw new Error("Missing employee property");
        }

        // Convert string values into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or years");
        }

        // Calculate bonus based on experience
        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log(
            `Name: ${employee.name} | Salary: ₹${salary} | ` +
            `Experience: ${years} years | Bonus: ₹${bonus} | ` +
            `Total: ₹${totalSalary}`
        );
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}