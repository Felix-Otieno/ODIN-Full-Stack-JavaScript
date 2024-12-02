const proto = {
    hello: function hello() {
      return `Hello, my name is ${ this.name }`;
    }
  };
  
  const george = Object.assign({}, proto, {name: 'George'});
  
  const msg = george.hello();
  
  console.log(msg); // Hello, my name is George