let promise = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // Handling the error using .catch()
  promise.catch(error => {
    console.log("Error caught:", error.message);
  });
  