'use strict';



//Objects:
const Yazan = {
    firstName: "yazan",
    course: "PY",
    age: 24,
    loveCoffee: true,
    favFood: ["mansaf", "pizza", "stake"],
    greeting: function () {
        console.log("Welcome "+this.firstName)
        
    }
   
    
}

const shaden = {
  firstName: "Shaden",
  course: "Java",
  age: 22,
  loveCoffee: false,
  favFood: ["fastFood", "pizza", "stake"],
  greeting: function () {
    console.log("Welcome " + this.firstName);
  },
};


const bashar = {
  firstName: "Bashar",
  course: "js",
  age: 21,
  loveCoffee: true,
  favFood: ["fastFood", "pizza", "stake"],
  greeting: function () {
    console.log("Welcome " + this.firstName);
  },
};


