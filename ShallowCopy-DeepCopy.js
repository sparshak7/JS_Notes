//Memory Management in JS is divided into Stack and Heap

//Stack stores all primitive data types and definitions

let a = 5;
let b = a; 
b = 7; //copy of a's value is given to b so both are independent variables in stack

console.log(a,b)

//Heap stores reference/user data types such as array,objects and they give reference and not value

let obj = {
  name: "Sparshak"
}

let obj2 = obj; //Shallow copy as obj returned a reference to obj2 so both are pointing to same address in heap, any change in either will be highlighted in both

obj2.name = "S"

console.log(obj.name, obj2.name)

//Deep copy is the opposite of shallow copy, reference is same but they can be independently changed

//Partial Deep Copy is possible in JS

let obj3 = {
  name: "A"
}

//Both methods implement partial deep copy
let obj4 = Object.assign({}, obj3) //assign a new object in heap but with properties of obj3
let obj5 = {...obj3} //ES6 spread

obj4.name = "B"

console.log(obj3.name, obj4.name)

//This is partial because nested objects are still dependent

let obj6 = {
  name: "A",
  skills: {
    main: "JS"
  }
}

let obj7 = {...obj6}

obj7.skills.main = "TS" //changes in both

console.log(obj6.skills.main, obj7.skills.main)

//This can be fixed via JSON parse and stringify

let obj8 = {
  skills: {
    main: "JS"
  }
}

let obj9 = JSON.parse(JSON.stringify(obj8))

obj9.skills.main = "TS" //only changes in obj9

console.log(obj8.skills.main, obj9.skills.main)

//However JSON parse does not have appropriate typing for functions, also converts object type to string such as Date

let obj10 = {
  name: "A",
  getName: function() {
    console.log(this.name)
  },

  date: new Date()
}

let obj11 = JSON.parse(JSON.stringify(obj10))

console.log(obj10, obj11)
console.log(typeof(obj10.date), typeof(obj11.date))

// True deep copy is achieved by Lodash .cloneDeep() property (third-party)
//cosnt _ = require("lodash")
// let obj1 = _.cloneDeep(obj2)

