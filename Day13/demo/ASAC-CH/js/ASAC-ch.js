"use strict";
const body = document.getElementsByTagName("body");
const allDrinks = [];
let form = document.getElementById("form");
//order of execution 
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
  const divEl = document.createElement("div");
  body[0].appendChild(divEl);

  const pEl = document.createElement("p");
  pEl.textContent = `Drink name : ${this.name} : ${this.price}`;
  divEl.appendChild(pEl);

  // const imgEl = document.createElement("img");
  // imgEl.src = this.image;
  // imgEl.alt = this.name;
  // divEl.appendChild(imgEl);

  // const ulEl = document.createElement("ul");
  // divEl.appendChild(ulEl);
};

let americano = new Drink("americano", ["coffee", "ice", "sugar"],"./assets/americano.png", true,false,2.5);
let espresso = new Drink("espresso",["milk", "coffee", "ice"],"./assets/espresso.png",true,false,2.5);
let latte = new Drink("latte",["milk", "coffee", "ice", "sugar"],"./assets/latte.png",true,false,2.5);
let mocha = new Drink("mocha",["coffee", "ice"],"./assets/mocha.png",true,false,2.5);
console.log(1)

form.addEventListener("submit", handleSubmit);
// functions
function handleSubmit(event) {
  console.log(3);
  event.preventDefault();
  let name = event.target.drinkName.value;
  let ingredients = event.target.ingredients.value;
  let img = event.target.img.value;
  let price = event.target.price.value;
  let cold = event.target.cold.checked;
  let hot = event.target.hot.checked;

  const newDrink = new Drink(name, ingredients, img, cold, hot, price);
  newDrink.printMenu();
  saveData(allDrinks);
}

function saveData(data) {
  console.log(4);
  let stringObj = JSON.stringify(data);
  localStorage.setItem("drinks", stringObj);
}

function getData() {
  let retrievedData = localStorage.getItem("drinks");
  console.log(2);

  let arrayData = JSON.parse(retrievedData);

  console.log(arrayData);
// optional chaining
  if (arrayData != null) {
   
    for (let i = allDrinks.length; i < arrayData.length; i++) {
      // if (allDrinks[i]?.name !== arrayData[i].name) {
        
        new Drink(
          arrayData[i].name,
          arrayData[i].ingredients,
          arrayData[i].image,
          arrayData[i].isCold,
          arrayData[i].isHot,
          arrayData[i].price
        );
      // }
    }
  }


  for (let i = 0; i < allDrinks.length; i++) {
    allDrinks[i].printMenu();
  }

  console.log("from constructor", allDrinks);
  console.log("from LS", arrayData);
}

getData();
