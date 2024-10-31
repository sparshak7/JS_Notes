//Lexical Scoping and Closures

let a = 6; //access this if inner context 'a' not present (this switching of context is lexical scoping)
function f1 () {
  let a = 5; //inner context 'a', lexical scope
  return function f2() {
    console.log(`${a}`)
  }

}

const f = f1(); //f is a function which has access to 'a' through closure property by its lexical scope
console.log(f())
