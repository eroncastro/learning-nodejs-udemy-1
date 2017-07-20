var obj = {
  name: 'John Doe',
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};

obj.greet();
obj.greet.call();
/*
  When using call, it is possible to overwrite
  where the this keyword points to.
*/

obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'Jane Doe' });

/*
  The difference between call and apply is that
  if the method has a parameter, call will pass
  the parameters as comma separated values whereas
  apply will pass an array of arguments.
*/

var obj2 = {
  name: 'John Doe',
  greet: function(param) {
    console.log(`Hello, ${this.name} ${param}`);
  }
};

obj2.greet.call({ name: 'Jane Doe' }, 'Madame');
obj2.greet.apply({ name: 'Jane Doe' }, ['Madame']);
