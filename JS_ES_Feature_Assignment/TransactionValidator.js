"use strict";

// Q3: Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Validate each transaction
for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MISSING_DATA");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        validTransactions.push(transaction);
        console.log(`Valid transaction: ID ${transaction.id}`);
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            reason: error.message
        });

        console.log(`Invalid transaction: ${error.message}`);
    }
}

// Display final reports
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log(`Successful Count: ${validTransactions.length}`);
console.log(`Failed Count: ${invalidTransactions.length}`);