'use strict';

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
    // console.log(`${this.name} : ${this.price} JD`)
    document.write(`<p>${this.name} : ${this.price} JD</p>`);
    document.write(`<img src=${this.image} alt=${this.name}>`);
    
}

let americano = new Drink("americano", ["milk", "coffee", "ice", "sugar"], "./assets/americano.png", true, false, 2.50);
let espresso = new Drink("espresso", ["milk", "coffee", "ice"], "./assets/espresso.png", true, false, 2.50);
let latte = new Drink("latte", ["milk", "coffee", "ice", "sugar"], "./assets/latte.png", true, false, 2.50);
let mocha= new Drink("mocha", ["milk", "coffee", "ice", "sugar", "milk"], "./assets/mocha.png", true, false, 2.50);


americano.printMenu();
espresso.printMenu();
latte.printMenu();
mocha.printMenu();


console.log(allDrinks);

console.log(document)
console.dir(document)
//document.write

function myfunction() {
    document.write(`<p>${espresso.name} </p>`);
   

    
}
 myfunction(); 


document.write("<h1>welcome to ASAC coffee House </h1><br><p>hello Yazan </p>");







