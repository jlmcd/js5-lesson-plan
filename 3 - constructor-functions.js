// CONSTRUCTOR FUNCTIONS
// Builds objects, just like es6 classes

// Capitalizing the function name indicates that this function is a constructor.
function Car() {
  // 'this' refers to the new object that is being constructed.
  // we are using dot notation to add make & model properties to the new object.
  
  // this = {}; <--- IMPLIED
     this.make = 'Ford';
     this.model = 'Mustang';
  // return this; <-- IMPLIED
  
  // The new object gets automatically returned, we don't need to use a return statement.
}

// Using the 'new' operator builds an new instance of an object (blueprint for object  contained in the function)
// 'new' also sets the context for the 'this' keyword.
var mustang = new Car();


// Think of constructor functions as a blueprint for objects that we want to build.


// Same as above, but no hard coded info.

function Car(make, model) {
  this.make = make;
  this.model = model;
}
var mustang = new Car('Ford', 'Mustang');


// Same as above, but now we will add a method.

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
//   this.sound = function() {
//     console.log('I am a ' + this.make + ' and I go vroom vroom!')
//   }
// }
var mustang = new Car('Ford', 'Mustang');
var camry = new Car('Toyota', 'Camry');
var tesla = new Car('Tesla', 'Model S');
// mustang.sound();
// camry.sound();
// tesla.sound();

// We just created 3 car objects. Each have a make, model, and sound property.
// Notice that each car object will have the same exact function. Seems like this could be a waste of memory.

// Prototype functions to the rescue.

// Instead of putting the sound function on each and every car object, we can create it as a protoype method of the Car function. This will allow all car objects to reference the one protoype method.

function Car(make, model) {
  this.make = make;
  this.model = model;
}

// [name of contructor].prototype.[name of function] = function() {}
Car.prototype.sound = function() {
    console.log('I am a ' + this.make + ' and I go vroom vroom!')
}

var mustang = new Car('Ford', 'Mustang');
var camry = new Car('Toyota', 'Camry');
var tesla = new Car('Tesla', 'Model S');
mustang.sound();
camry.sound();
tesla.sound();
console.log(mustang)