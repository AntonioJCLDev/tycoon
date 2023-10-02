const spanMoney = document.querySelector('#current-money')
const btnPowerUp = document.querySelector('#x2')
const priceSpan = document.querySelector('#upgrade-auto')
const priceAdd = document.querySelector('#add-menu')
const clickSpan = document.querySelector('#upgrade-click')
const level = document.querySelector('#level')
const ms = document.querySelector('#ms')
const clickLevel = document.querySelector('#click-level')
const perClick = document.querySelector('#per-click')
let speedBuy = 8000
let currentMoney = 0
let pricemenu = 100
let priceSpeed = 20
let priceClick = 50
let productPrice
let speedLevel = 1
let clickLvl = 1
let cashClick = 1
let click = 1
spanMoney.innerHTML = currentMoney
priceSpan.innerHTML = priceSpeed
priceAdd.innerHTML = pricemenu
clickSpan.innerHTML = priceClick
clickLevel.innerHTML = clickLvl
perClick.innerHTML = cashClick
level.innerHTML = speedLevel
ms.innerHTML = speedBuy


function manualSells() {
    currentMoney = currentMoney + click
    spanMoney.innerHTML = currentMoney
};

function upgradeClick() {
    if(currentMoney >= priceClick) {
        currentMoney = currentMoney - priceClick;
        clickLvl ++
        autoSell()
        click = click * 2
        cashClick = click
        priceClick = Math.floor(priceClick * 2)
        clickSpan.innerHTML = priceClick
        clickLevel.innerHTML = clickLvl
        perClick.innerHTML = cashClick
    }
    else {
        alert("No tienes dinero suficiente")
    }
}

function autoSell() {
    getPrice()
    currentMoney = currentMoney + productPrice;
    spanMoney.innerHTML = currentMoney;
}
let interval = setInterval(autoSell, speedBuy);
  
function speedUp() {
    if(currentMoney >= priceSpeed) {
        currentMoney = currentMoney - priceSpeed;
        speedLevel ++
        clearInterval(interval)
        autoSell()
        speedBuy = speedBuy / 1.5
        priceSpeed = Math.floor(priceSpeed * 1.5)
        priceSpan.innerHTML = priceSpeed
        level.innerHTML = speedLevel
        ms.innerHTML = Math.floor(speedBuy)
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
const menu = new products('Menu', './images/menu.webp', 10)

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
    else if (randomPrice == 2) {
        productPrice = soda.price
        console.log("Soda");
    }
    else if (randomPrice == 3) {
        productPrice = menu.price
        console.log("Menu")
    }
    console.log(productPrice)
};

const addProduct = (name, img, price) => {
    const newProduct = new products(name, img, price);

    return newProduct;
}

/* function addMenu() {
    if(currentMoney >= priceAdd) {
        currentMoney = currentMoney - priceAdd;
        const menu = addProduct('Menu', './images/menu.webp', 10)
        priceAdd.innerHTML = pricemenu
    }
    else {
        alert("No tienes dinero suficiente")
    }
} */