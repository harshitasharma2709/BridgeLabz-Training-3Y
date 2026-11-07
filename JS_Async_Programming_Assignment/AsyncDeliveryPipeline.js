// Q10: Create an asynchronous food delivery pipeline.

// Function to simulate each delivery step.
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        // Generate a random delay between 1 and 2 seconds.
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            const hasFailed = Math.random() < 0.2;

            if (hasFailed) {
                reject(`${stepName} failed.`);
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

// Run all delivery steps sequentially.
async function runPipeline() {
    try {
        console.log("Start Pipeline");

        // Step 1: Take the order.
        await deliveryStep(
            "Take Order",
            "Step 1: Order taken"
        );

        // Step 2: Prepare the food.
        await deliveryStep(
            "Prepare",
            "Step 2: Food prepared"
        );

        // Step 3: Pack the food.
        await deliveryStep(
            "Pack",
            "Step 3: Package ready"
        );

        // Step 4: Dispatch the order.
        await deliveryStep(
            "Dispatch",
            "Step 4: Out for delivery"
        );

        // Step 5: Deliver the order.
        await deliveryStep(
            "Deliver",
            "Delivery completed!"
        );

    } catch (error) {
        // Stop the pipeline if any step fails.
        console.log("Pipeline failed!");
        console.log("Error:", error);
    }
}

// Start the delivery pipeline.
runPipeline();

/*
Async behavior explanation:

1. Each deliveryStep() function returns a Promise.
2. setTimeout() simulates an asynchronous delay.
3. await pauses the current async function until
   the Promise settles.
4. The next delivery step starts only after the
   previous step succeeds.
5. If any Promise rejects, control moves to catch.
6. JavaScript can execute other tasks while waiting
   for an asynchronous operation to complete.
*/