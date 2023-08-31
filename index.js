const spanMoney = document.querySelector('#current-money')
const btnPowerUp = document.querySelector('#x2')
let speedBuy = 8000
let currentMoney = 0
let priceSpeed = 20
spanMoney.innerHTML = currentMoney

function autoSell() {
    currentMoney = currentMoney + 2;
    spanMoney.innerHTML = currentMoney;
}
let interval = setInterval(autoSell, speedBuy);
  
function speedUp() {
    if(currentMoney >= priceSpeed) {
        currentMoney = currentMoney - priceSpeed;
        clearInterval(interval)
        autoSell()
        speedBuy = speedBuy / 2
        priceSpeed = priceSpeed * 1.5
        interval = setInterval(autoSell, speedBuy); 
    }
    else {
        alert("No tienes dinero suficiente")
    }
}

