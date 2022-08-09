'use strict';
const body = document.getElementsByTagName('body');
//constructor:
const allDrinks = [];
function Drink(name, ingredients, image, iscold, ishot, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = iscold;
    this.isHot = ishot;
    this.price = price;
    allDrinks.push(this);
} 


Drink.prototype.printMenu = function () {

    const divEl = document.createElement('div');
    body[0].appendChild(divEl);

    //par
    const pEl = document.createElement('p');
    pEl.textContent = `Drink name : ${this.name} : ${this.price}`;
    divEl.appendChild(pEl);

    //img
    const imgEl = document.createElement('img');
    imgEl.src = this.image;
    imgEl.alt = this.name;
    divEl.appendChild(imgEl);

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    // for (let i = 0; i < this.ingredients.length; i++) {
    //     let liEl = document.createElement('li');
    //     ulEl.appendChild(liEl);
    //     liEl.textContent = this.ingredients[i];
    // }






}

let americano = new Drink("americano", [ "coffee", "ice", "sugar"], "./assets/americano.png", true, false, 2.50);
let espresso = new Drink("espresso", ["milk", "coffee", "ice"], "./assets/espresso.png", true, false, 2.50);
let latte = new Drink("latte", ["milk", "coffee", "ice", "sugar"], "./assets/latte.png", true, false, 2.50);
let mocha= new Drink("mocha", [ "coffee", "ice"], "./assets/mocha.png", true, false, 2.50);


// for (let i = 0; i < allDrinks.length; i++) {
//     allDrinks[i].printMenu();
// }


// console.log(allDrinks);
let form = document.getElementById("form");
//submit(form);
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let name = event.target.drinkName.value;
    let ingredients = event.target.ingredients.value;
    let img =event.target.img.value; 
    let price = event.target.price.value;
    let cold = event.target.cold.checked;
    let hot = event.target.hot.checked;
    console.log(name, ingredients, img, price, cold, hot);
    
    const newDrink = new Drink(name, ingredients, img, cold, hot, price);
    newDrink.printMenu();
    console.log(allDrinks);
    saveData(allDrinks);
    

    
}


function saveData(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem('drinks', stringObj);
}

function getData() {

    let retrievedData = localStorage.getItem("drinks");
    let arrayData = JSON.parse(retrievedData);
    

    if (arrayData != null) {
        // arrayData.shift();
        // arrayData.shift();
        // arrayData.shift();
        // arrayData.shift();
    for (let i = 0; i < arrayData.length; i++) {
        // if (!allDrinks.includes(arrayData[i])) {
                
            new Drink(
              arrayData[i].name,
              arrayData[i].ingredients,
              arrayData[i].image,
              arrayData[i].isCold,
              arrayData[i].isHot,
              arrayData[i].price
            );
            }
        // }
    }
    // printMenu();
    for (let i = 0; i < allDrinks.length; i++) {
      //   arrayData[i].printMenu();//error
      allDrinks[i].printMenu(); 
    }
    console.log(allDrinks)
    console.log(arrayData);


}
 getData(); 










