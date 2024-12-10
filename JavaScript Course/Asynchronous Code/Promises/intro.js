let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('succeed');
    }
    else {
        reject('Failed');
    }
})

promise.then((message) => {
    console.log('This is the then ' + message);
}).catch((message) => {
    console.log('This in the catch ' + message);
})