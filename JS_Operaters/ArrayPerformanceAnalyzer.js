// Q4: Array Performance Analyzer

// Generate 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Find highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate total and average using reduce()
let totalScore = scores.reduce((total, score) => total + score, 0);
let averageScore = totalScore / scores.length;

// Filter students who passed
let passedStudents = scores.filter(score => score >= 50);

// Display the summary
console.log("Student Scores:", scores);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents.length}`);
console.log("Passed Scores:", passedStudents);