// Q8: Implement an order submission retry mechanism.

// Function that randomly succeeds or fails.
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() >= 0.5;

            if (isSuccessful) {
                resolve("Order submitted successfully.");
            } else {
                reject("Order submission failed.");
            }
        }, 1000);
    });
}

// Process the order with a maximum of 3 attempts.
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            console.log(result);

            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // Throw an error if all three attempts fail.
    throw new Error("Order could not be processed");
}

// Handle the final failure.
async function startOrderProcessing() {
    try {
        await processOrder();
    } catch (error) {
        console.log(error.message);
    }
}

// Start the process.
startOrderProcessing();