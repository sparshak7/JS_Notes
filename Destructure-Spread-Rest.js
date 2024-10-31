//Destructuring means to segregate an object/array to individual components

const obj = {
  name: "Sparshak",
  age: 21
}

function func1({name, age}) { //destructure obj into name and age directly
  console.log(name, age)
}

function func2(obj2) {
  const {name, age} = obj2 //destructure separately
  console.log(name, age);
}

func1(obj)
func2(obj)

const arr = [[1,2], 3, [5,7,8]]

function func3(arr) {
  const [first, second, third] = arr
  console.log(first, second, third)
}

func3(arr)

//Spread and Rest operators (...) are used to destructure large number of items quickly

function func4(arr) {
  const [first, ...rest] = arr //first extracts the first element and rest is put in another array, rest should be at the end of destructure
  
  console.log(first, rest)
}

func4(arr)

const obj1 = {
  ...obj, //extract all properties of obj
  profession: "student"
}

console.log(obj1)

const {name, ...rest} = obj1 //extracts first property (keys should match with object) and puts rest to new object

console.log(name, rest)

