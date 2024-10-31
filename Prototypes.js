//Prototypes are custom methods that we can define for extra functionality, same as methods in class

//JS is not an OOPS language, it is a prototype driven language where OOPS is just syntactical sugar
//OOPs way of instance variable and methods(prototypes in JS) (ES6)

class A {
  constructor(name,age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log("Hello")
  }
}

const obj = new A("S",21) //new differentiates between object instances and calls constructor
obj.greet()

//Actual prototype way of above

function f1(name,age) { //this is a constructor function
  this.name = name
  this.age = age
}

f1.prototype.greet = function() {
  console.log("Hello")
}

const obj1 = new f1("S",21);
obj1.greet()

Object.prototype.greeting = () => console.log("Hello") //prototype on global object inherited by everyone
const obj2 = {}
obj2.greeting()
Array.prototype.greetings = () => console.log("Hello") //prototype only on Arrays
const arr = []
arr.greetings()
