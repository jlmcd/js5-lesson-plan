// Closure : 
// 1. Function within a function
// 2. Inner function returned from outer function


// Outer function scope enclosing the inner function (function within a function)
function outer() {
  // outer has one local variable
  var num = 1;
  function inner() {
    // inner can access outer's local variables because of scope
    // inner modifies num and returns the new value.
    num++;
    console.log('current value of num: ', num);
  }
  // outer returns inner
  // NOTE: inner was not invoked.
  return inner;
}

// outer is invoked and inner is returned
// what is the value of closure? inner function (console.log(inner) to verify)
var closure1 = outer();
// console.log(closure1)

// Since closure1 is a function, we can invoke it.
// closure1()

// What happens if we invoke closure1 multiple times?
// closure1();
// closure1();
// closure1();
// closure1();

// the closure retains a reference to any local variables in the parent function's scope.


// MODULE PATTERN
// public and private methods & variables
// shields parts of our code from the global scope

function modulePattern() {
  // variables and functions here are private and are only accessed through the public functions in the returned object
  var privateVariable = 'I am private';
  
  var privateFunction = function() {
    console.log(privateVariable)
  }
  
  return {
    // everything returned is public
    changeVar: function(str) {
      privateVariable = str;
    },
    readVar: function() {
      privateFunction();
    }
  }
}

// object with public methods stored in module1
var module1 = modulePattern();
// module1.changeVar('changing private var through public method');
// module1.readVar()
