// Q7: Handle multiple asynchronous dashboard modules.

// Load profile module.
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile loading failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

// Load posts module.
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts loading failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

// Load messages module.
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Messages loading failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

// Execute all modules together.
async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    // Display success and failure results.
    results.forEach((result, index) => {
        const modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(
                `${modules[index]}: Success - ${result.value}`
            );
        } else {
            console.log(
                `${modules[index]}: Failed - ${result.reason}`
            );
        }
    });

    const endTime = Date.now();
    const totalTime = endTime - startTime;

    console.log("Total time taken:", totalTime, "ms");
}

// Run dashboard.
loadDashboard();