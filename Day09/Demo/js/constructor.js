'use strict';

//constructor 
//bluprint, template, function 
//function name(p1,p1){

//}


const allUsers = [];function User(
  nameValue,
  courseValue,
  ageValue,
  lovingCoffeeValue,
  favFoodValue,
  majorValue
) {
  this.firstName = nameValue;
  this.course = courseValue;
  this.age = ageValue;
  this.loveCoffee = lovingCoffeeValue;
  this.favFood = favFoodValue;
  this.major = majorValue;
  // this.greeting = function () {
  //    console.log("Welcome " + this.firstName);
  //  };
  console.log("this keyword--->", this);
  allUsers.push(this);
  
}

//prototype method
User.prototype.greeting = function () {
  console.log("Welcome " + this.firstName);
};




//create Objects
const yazan = new User("Yazan", "PY", 24, true, ["mansaf", "pizza", "stake"]);
const shaden = new User("Shaden","Java",22,false,["fastFood", "pizza", "stake", "AI"],"AI");
const bashar = new User("Bashar", "js", 21, true, ["fastFood", "pizza", "stake"]);

bashar.greeting();
shaden.greeting();
yazan.greeting();


// shaden["major"] = "AI";
console.log(yazan);
console.log(shaden);
console.log(bashar);

// yazan.greeting();
// shaden.greeting();
// bashar.greeting();



// allUsers.push(yazan);
// allUsers.push(shaden);
// allUsers.push(bashar);

//global Array:
// console.log(allUsers);



for (let i = 0; i < allUsers.length; i++) {
  console.log(allUsers[i].age);
}

