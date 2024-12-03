function makeCounter() {
    let count = 0; // `count` is captured by the closure
  
    return function () {
      count++; // Inner function retains access to `count`
      console.log(count);
    };
  }
  
  const counter = makeCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  