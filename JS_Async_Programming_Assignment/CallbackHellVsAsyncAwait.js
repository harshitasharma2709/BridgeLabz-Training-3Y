// Q5: Demonstrate callback hell and its async/await solution.

// -------------------------------
// Part 1: Nested Callback Approach
// -------------------------------

function design(callback) {
    setTimeout(() => {
        console.log("Design completed.");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed.");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed.");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed.");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Celebration time!");
        callback();
    }, 1000);
}

// Nested callbacks create callback hell.
console.log("Callback Hell Pipeline Started");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Callback pipeline completed.");
                });
            });
        });
    });
});

// ---------------------------------
// Part 2: Promise and Async/Await
// ---------------------------------

function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${stageName} completed.`);
            resolve();
        }, 1000);
    });
}

// Async function executes stages in sequence.
async function runCleanPipeline() {
    console.log("\nAsync/Await Pipeline Started");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Async/Await pipeline completed.");
}

runCleanPipeline();

// Explanation:
// Async/await makes asynchronous code easier to read.
// It avoids deeply nested callbacks and provides a
// sequential structure similar to normal synchronous code.