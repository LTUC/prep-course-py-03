'use strict';
// function sum(x, y) {
//     return x + y;
// }
// sum(10,20)



// //callBack functions



// function greeting(x) {
//     let userName = x();
//     alert("welcome" + userName);
// }

// function getName() {
//     let Name = prompt("Enter you Name");
//     return Name;
// }

// greeting(getName);


//when I click on the btn I want to show a welcome msg for user
// 1. where the event should happen
let btn = document.getElementById('btn');
//2. what type of events should happen ? -> click 
//3.what should happen once the event happened 
btn.addEventListener('click', handleClick);

function handleClick() {
    alert("welcome to python course");
    
}

//when I hover on the btn I want to change the content of the button 
// 1. where the event should happen
let secondBtn = document.getElementById("secondBtn");
//2. what type of events should happen ? hovering

//3.what should happen once the event happened 
secondBtn.addEventListener("mouseover", handleHover);
//widow+simicolon
function handleHover(event) {
    console.log(event)
    secondBtn.textContent = '🟢';
}

//when I submit the form save the user data 

// 1. where the event should happen
let formEl = document.getElementById("form");
//2. what type of events should happen is submit
//3.what should happen once the event happened (save user data)
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    let Name = event.target.name.value;
    let email = event.target.email.value;
    console.log(Name,email);
    
}



