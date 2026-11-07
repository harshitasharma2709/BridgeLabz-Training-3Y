// Q3: Convert callback-based bug tracking into Promises.

// Promise-based function to fetch bugs.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("API request failed.");
            } else {
                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            }
        }, 1000);
    });
}

// Fetch and display bugs.
getBugs()
    .then((bugs) => {
        console.log("Bug Tracker Report:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });