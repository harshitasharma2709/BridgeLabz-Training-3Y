// Q4: Manage concurrent deployment server responses.

// Function to simulate a server response.
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasFailed = Math.random() < 0.2;

            if (hasFailed) {
                reject(`${serverName} deployment failed.`);
            } else {
                resolve(`${serverName} deployment completed.`);
            }
        }, delay);
    });
}

// Create promises for both servers.
const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all() waits for all servers to complete.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

// Promise.race() returns the first settled result.
Promise.race([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race error:", error);
    });