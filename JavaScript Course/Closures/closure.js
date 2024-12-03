function multiplier(factor) {
    return function (num) {
      return num * factor; // Closure retains `factor`
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
  