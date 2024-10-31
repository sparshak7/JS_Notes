//Immediately Invoked Function Expression (IIFE) is a function which is immediately called as soon as it is declared, they should end with ";" to stop propagation

(function f1 () {
  console.log("Hello World")
})(); //named function

(function() {
  console.log("Hello World again")
})(); //anonymous function

(() => {
  console.log("Hello World yet again")
})(); //arrow function

//IIFE is used to create a private scope and to avoid clashes with variable names in outer scope, or make an API call immediately before anything else

(() => {
  var a = 5 //private scope
  console.log(a)
})();

var a = 6
console.log(a)