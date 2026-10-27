// Q7: Customer Feedback Processor

// Store customer feedback
let feedback =
    "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase for checking
let lowerCaseFeedback = feedback.toLowerCase();

// Count the words
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Check for negative words
let hasNegativeWords =
    lowerCaseFeedback.includes("bad") ||
    lowerCaseFeedback.includes("poor");

// Display the feedback report
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

if (hasNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}