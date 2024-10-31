//Var has functional scope, that means variables defined by var only exist in the function but accessible if block scoped

{
  var a = 5
}

console.log(a) //still accessible 

function f1() {
  var b = 5
  console.log(b) //accessible here
}

// console.log(b) //ReferenceError: b is not defined

//Let has block scope, so it's only local to {}

{
  let c = 5;
}

// console.log(c) //same error

function f2() {
  let d = 5;
  console.log(d) //accessible here
}

// console.log(d) //same error

//Const has same scoping rule as let, however values declared with const cannot be modified later

const e = 50
// e = 78 //TypeError: assignment to constant variable error

//Hoisting is a JS mechanism where during memory phase, all variables and methods are are allocated memory in the execution context so even if they are declared at the end, their definition exists in the context. Once the exectution phase starts, values are assigned to them. Methods have their own execution context

//Var is hoisted and can be accessed even before initialisation (undefined by default)
console.log(f)
var f = 5
console.log(f)

//Let and const are also hoisted but they exist in TDZ (temporal dead zone) where they cannot be accessed before intialisation

// console.log(g,h) //reference error
let g = 5
const h = 6
console.log(g,h)

//functions are also hoisted but their signature exists in memory as function will have its own context

console.log(f3)

function f3() {
  //separate context inside which follow the above rules
  console.log("Hello")
}