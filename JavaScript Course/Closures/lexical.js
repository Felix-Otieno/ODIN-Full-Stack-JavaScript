function outer() {
    let outerVar = "I'm in the outer function!";
    
    function inner() {
      console.log(outerVar); // Can access `outerVar` because of lexical scope
    }
  
    inner();
  }
  
  outer();
  