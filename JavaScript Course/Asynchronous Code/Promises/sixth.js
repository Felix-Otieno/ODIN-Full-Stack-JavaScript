let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(result => console.log(result)); // Logs "done!" after 1 second
