let globalVar = "I'm global!";

function outer() {
  let outerVar = "I'm in the outer scope!";

  function inner() {
    console.log(globalVar); // Accesses variable in the global scope
    console.log(outerVar);  // Accesses variable in the outer function's scope
  }

  inner();
}

outer();
