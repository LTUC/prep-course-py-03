'use strict';
console.log(document);


let h1El = document.getElementsByTagName("h1");


// console.log(h1El[0]);
// //add content to the element 
h1El[0].textContent = "Hello World";
// //     
let pEl = document.getElementsByTagName("p");
// console.log(pEl)
pEl[1].textContent = "This is a paragraph";


const parEl = document.getElementById("par");
console.log(parEl)
//content.
parEl.textContent = "This is a paragraph with id";


const divEl = document.getElementsByClassName("container");
console.log(divEl);

//style
pEl[1].style.color = "red"; 
//Background-color
h1El[0].style.backgroundColor = "blue";



// let p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].classList.add("design");
    
// }



// pEl[0].classList.add('design');
// pEl[1].className = "design";
// pEl[2]


//creating Elements :
//3 steps to do it :
//1. creating the element from js :

const h2El = document.createElement('h2');
//2.add text content or attirbute
h2El.textContent = "this is h2 element"

//appending it 
// divEl[0].appendChild(h2El);

console.log(h2El);

const div = document.getElementById('div');
div.appendChild(h2El);

//<img  src=""  alt="">

//1.create element 
const imgEl = document.createElement("img");
//2.add text content or attirbute
imgEl.src = "https://tse4.mm.bing.net/th?id=OIP.Ex4HNe0slI8a_oF4iue0YwHaEo&pid=Api&P=0";
imgEl.alt = "coffee cup";
//3.appending it 
div.appendChild(imgEl);

















