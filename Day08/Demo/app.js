'use strict';

// var userName; 
// console.log(userName);
//  userName = "Bayan";
// console.log(userName);

//hoisting
// myfunction();

// function myfunction() {
//     console.log("inside function");
// }

// x = 10;
// console.log(x);
// var x=0;

// console.log(x);
// var x = 10;

// let var const 

// let y = 10;
// y = "omar"
// console.log(y);

 
// const y = 10;
// y = "omar"
// console.log(y);

//global scope :
// const first = 1;
// let second = 2;
// var third = 3;

// console.log(first,second,third)



// //block scopes :


// if (true) {
//     var x = " block scope";
//     console.log(x);
    
// }
// console.log(x);

// //function scopes
// let grade =20
// function myfunction() {
//     const x ="inside func scope"
//     console.log(grade);
//     console.log(first, second, third);
    
// }
// myfunction(); 
// // console.log("outside",x);

//Objects:
const user = {
    firstName: "yazan",
    course: "PY",
    age: 24,
    loveCoffee: true,
    favFood: ["mansaf", "pizza", "stake",this.course],
    greeting: function () {
        console.log("Welcome "+this.firstName)
        
    }

   
    
}
console.log(user.favFood)
user.firstName
// console.log(user);
// console.log(user.favFood);
// console.log(user["course"]);

user.greeting();
user["greeting"]();
//add new prop
user.lastName = "alfarra";
user["nationality"] = "jordanian";
// add nw method :
user.welcoming = function () {
    console.log("welcome Yazan")
}

//delete a property :
delete user.age;
delete user["age"];


//loop through an obj :
console.log("-------------");
// for (const key in user) {
//     // console.log(key)

//     console.log(key , user[key])
//     // console.log(key, user.key);
    
// }

//This :

console.log(this);

//string methods :
// interpolation :
console.log(`this is ${user.firstName} from ${user.course} course .  `)