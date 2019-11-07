// Simple closure example

// write outer function that takes in start number
// inner function should take in a number to add to the start parameter from the parent function



// Do w/ instructor:
// Order tracker. tracks ingredients in  each sandwich order

function orderCreator() {
  let listOfIng = [];
  return function(ing) {
    listOfIng.push(ing)
    console.log('List: ', listOfIng)
  }
}

let joeOrder = orderCreator();
// joeOrder('bread')
// joeOrder('lettuce')
// let sallyOrder




// Do w/ instructor: 
// Make sure you have reviewed module pattern
// Create a calculator using closures and the module pattern

function calculatorCreator() {
  let startVal = 0;
  return {
    add: function(val) {
      startVal += val
      return startVal;
    },
    sub: function (val) {
      startVal -= val
      return startVal
    },
    divide: function(val) {
      startVal /= val
      return startVal
    },
    mult: function(val) {
      startVal *= val;
      return startVal;
    }
  }
}

let calc1 = calculatorCreator();
calc1.add(200)
calc1.add(33)
calc1.sub(1)
calc1.divide(2)
calc1.mult(5)

let calc2 = calculatorCreator()



// Students: try on your own
// Bank example. add & remove funds

// 