//Currying - lock values in separate functions for reusability

function f1(a) {
  console.log(a)
  return function f2(b) {
    console.log(a+b)
    return function f3(c) {
      console.log(a+b+c)
    }
  }
}

const f = f1(5); //f is a function which locked 5
const g = f(6); //g is a function which locked 6, along with the previous lock of 5
const h = g(7) //h is a function which locked 7 and the previous two
