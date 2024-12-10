// Create a new promise
let promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        let success = Math.random() > 0.5; // Randomly decide success or failure
        if (success) {
            resolve("Success! The operation completed.");
        } else {
            reject(new Error("Whoops! Something went wrong."));
        }
    }, 1000); // Delay of 1 second
});

// Handle the promise
promise
    .then((result) => {
        // This block executes if the promise resolves successfully
        console.log(result);
    })
    .catch((error) => {
        // This block executes if the promise rejects
        console.error(error);
    })
    .finally(() => {
        // This block executes regardless of success or failure
        console.log("Promise has been settled (fulfilled or rejected).");
    });
