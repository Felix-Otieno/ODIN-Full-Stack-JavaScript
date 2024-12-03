const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      ++timesRun;
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
  })();
  console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.timesRun);

Formatter.timesRun = 10;
console.log(Formatter.timesRun);