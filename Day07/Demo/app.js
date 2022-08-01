// console.log('py class');

// //pop up boxes
// //1. alert
// alert("Welcome to our website");

// //2.prompt


// var userName = prompt("Enter your Name ");
// console.log(userName);

// //3.confirm


// var x = confirm("Are you sure ?");
// console.log(x);

//conditions
// var userAge = prompt("Enter your Age ");
// if (userAge < 10) {
//     alert("you have a school tomorrow !!")

    
// } else {
//      alert("have fun !!");
    
    
// }

//ternary if 
// userAge < 10 ? alert("you have a school tomorrow !!") : alert("have fun !!");

//Nameing convition

var userName = "user";

var x = 10;
var X = 15;

//Arrays
var Names = ["Walaa", "Ahmad"]
// Names.push("Amani");
// Names[2]= "Razan"
Names.unshift("Mahmoud");
console.log(Names[2]);

console.log(Names)

//loops:

for (var i = 0; i < Names.length; i++){
    // console.log(i)
    console.log(Names[i])
    if (Names[i] == "Walaa") {
        console.log("its found")
        // break;
        i=Names.length

    }
}

// functions :
function greeting() {
    // alert("welcome Home");
    console.log("welcome Home");
}
//invoke or call function

greeting();


function division(x, y) {
    return x / y;
}
var result = division(10, 5);
console.log(result);











