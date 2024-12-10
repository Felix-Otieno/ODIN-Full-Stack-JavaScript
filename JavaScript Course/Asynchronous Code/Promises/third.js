let promise = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // Async function to handle the promise
  async function handlePromise() {
    try {
      let result = await promise; // Wait for the promise to resolve/reject
      console.log(result); // This line won't execute in case of rejection
    } catch (error) {
      console.log("Error caught:", error.message);
    }
  }
  
  handlePromise();
  