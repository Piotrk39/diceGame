
function randomNumber1() {
    return Math.floor((Math.random() * 6) + 1);
} 

var img1Number = randomNumber1()
var img2Number = randomNumber1()

document.querySelector(".img1").src = "images/dice"+img1Number+".png"

document.querySelector(".img2").src = "images/dice"+img2Number+".png"

function winner() {
    if (img1Number > img2Number) {
        document.querySelector("h1").textContent = "🚩 Player 1 wins"
    } else if (img1Number < img2Number) {
        document.querySelector("h1").textContent = "Player 2 wins 🚩"
    } else if (img1Number === img2Number) {
        document.querySelector("h1").textContent = "Draw!"
    }  
}

winner()