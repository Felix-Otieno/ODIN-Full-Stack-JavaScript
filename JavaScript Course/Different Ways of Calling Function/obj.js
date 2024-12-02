"use-strict"
function showThis() {
    console.log(this);
  }
  
  showThis(); // In non-strict mode: `window`, in strict mode: `undefined`.
  