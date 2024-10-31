//this keyword highlights the current context

const obj = {
  name: "Sparshak",

  getName: function() {
    console.log(this) //context of the object 'obj'
  }
}

obj.getName()

//The 'this' of obj has access to just properties of obj, but we can change it by call bind apply

//Bind -> returns a function whose 'this' is binded to some other object other than its own

const obj2 = {
  name: "SK"
}

const bind_func = obj.getName.bind(obj2)

bind_func()

//Call -> call a function by passing arguments sequentially
//Apply -> same as call, pass arguments in array

const obj1 = {
  name: "A",
  getName: function(num1, num2, num3) {
    console.log(`${num1}, ${num2}, ${num3}`)
  }
}

obj1.getName.call(null, 5,6,7) //null as we are not binding to another object
const arr2 = [5,6,7]
obj1.getName.apply(null, arr2)

//manipulate 'this' by call/apply

const obj3 = {
  name: "S",
  getName: function (msg) {
    console.log(`${msg}, ${this.name}`);
  },
};

const obj4 = {
  name: "A"
}

obj3.getName.call(obj4,"Greetings") //obj3 is now binded to obj4, so name is now 'A'

//Arrow Functions do not have 'this' pointing to that context, it points to global object or window
//Call, bind, apply will also have no effect

const obj5 = {
  name: "V",

  getName: () => {
    console.log(this) //empty object
  }
}

obj5.getName()

const obj6 = {
  name: "B"
}

const func = obj5.getName.bind(obj6)
func() //empty object


