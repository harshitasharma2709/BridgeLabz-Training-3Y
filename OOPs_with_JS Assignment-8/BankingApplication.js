// Q7: Banking Application using Private Fields

class BankAccount {
    #balance;

    constructor(balance = 0) {
        if (balance < 0) {
            throw new Error("Balance cannot be negative.");
        }

        this.#balance = balance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Enter a valid deposit amount.");
        }

        this.#balance += amount;
        console.log("Deposited: Rs.", amount);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Enter a valid withdrawal amount.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log("Withdrawn: Rs.", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

// Valid deposit and withdrawal.
account.deposit(2000);
console.log("Balance:", account.getBalance());

account.withdraw(1000);
console.log("Balance:", account.getBalance());

// Handle invalid withdrawal.
try {
    account.withdraw(10000);
} catch (error) {
    console.log("Transaction Error:", error.message);
}

console.log("Final Balance:", account.getBalance());