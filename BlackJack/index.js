let player = {
    name : "Misa",
    chips : 250
}
let sum = 0
isAlive = false
hasBlackJack = false
let message = ""
let cards = []
let msg = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
//let sumEl = document.querySelector("#sum-el") 

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    
    let num =  Math.floor(Math.random() * 13) + 1
    if (num > 10) {
        return 10
    }
    else if (num === 1){
        return 11
    }
    else{
        return num
    }
}

function startGame(){
    isAlive = true
    

    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    cards.push(firstCard,secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "

    for (let i = 0; i< cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum < 20){
        message = "Do you want to draw a new card?"
        
    }else if(sum === 21){
        message = "You have a BlackJack!"
        hasBlackJack = true
        
    }else{
        message = "You are out of the game!"
        isAlive = false 
    }
    msg.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        newC  = getRandomCard()
        sum += newC
        cards.push(newC)
        renderGame()
    }
   
}