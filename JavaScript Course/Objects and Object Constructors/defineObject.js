const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      console.log("Hey there now I am intermediary.");
      return "Function executed successfully!";
    }
  };
console.log(myObject.property); // Dot notation
console.log(myObject.otherProperty); // Dot notation
myObject["obnoxious property"](); // Bracket notation
console.log(myObject["obnoxious property"]());  