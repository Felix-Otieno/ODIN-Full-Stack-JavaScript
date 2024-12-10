let promise = new Promise(function (resolve) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });
  
  // Handling the promise
  promise
    .then((result) => {
      // This block executes if the promise is resolved
      console.log("Promise resolved with:", result); // Output: Promise resolved with: done
    })
    .catch((error) => {
      // This block executes if the promise is rejected
      console.error("Promise rejected with:", error);
    })
    .finally(() => {
      // This block executes regardless of the promise state
      console.log("Promise handling complete.");
    });
  