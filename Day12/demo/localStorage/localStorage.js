'use strict';

console.log(localStorage);
//1. clear() :it will clear the data from localStorage
localStorage.clear();

//2.setItem : save data as key-value pairs 
localStorage.setItem("name", "Murshed");
localStorage.setItem("name", "Rania");
localStorage.setItem("gender", "Male");

//3. getItem()
let userName = localStorage.getItem("grade");
console.log(userName);
//4.removeItem()
// localStorage.removeItem("name");