const spanMoney = document.querySelector('#current-money')
const btnPowerUp = document.querySelector('#x2')
const priceSpan = document.querySelector('#price')
let speedBuy = 8000
let currentMoney = 0
let priceSpeed = 20
let productPrice
spanMoney.innerHTML = currentMoney
priceSpan.innerHTML = priceSpeed

function autoSell() {
    getPrice()
    currentMoney = currentMoney + productPrice;
    spanMoney.innerHTML = currentMoney;
}
let interval = setInterval(autoSell, speedBuy);
  
function speedUp() {
    if(currentMoney >= priceSpeed) {
        currentMoney = currentMoney - priceSpeed;
        clearInterval(interval)
        autoSell()
        speedBuy = speedBuy / 1.5
        priceSpeed = Math.floor(priceSpeed * 1.5)
        priceSpan.innerHTML = priceSpeed
        interval = setInterval(autoSell, speedBuy); 
    }
    else {
        alert("No tienes dinero suficiente")
    }
}

class products {
    constructor(name, img, price) {
        this.name = name,
        this.img = img,
        this.price = price
    }
}
const burger = new products('Burger', './images/burger.webp', 5)
const fries = new products('Fries', './images/fries.webp', 3)
const soda = new products('Soda', './images/soda.webp', 2)

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getPrice() {
    let randomPrice = random(0, products.length -1);

    if (randomPrice == 0) {
        productPrice = burger.price
        console.log("Burguer");
    }
    else if (randomPrice == 1) {
        productPrice = fries.price
        console.log("Fries");
    }
    else {
        productPrice = soda.price
        console.log("Soda");
    };
    console.log(productPrice)
};

function addMenu() {
    const menu = new products('Menú', '', 10)
}