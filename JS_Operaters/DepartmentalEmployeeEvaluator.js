// Q10: Departmental Employee Evaluator

// Store department names and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Evaluate each department's performance
for (let department of departments) {
    let departmentName = department[0];
    let score = department[1];
    let performance;

    // Classify performance using nested if-else
    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    console.log(
        `Department: ${departmentName} | Score: ${score} | Performance: ${performance}`
    );
}