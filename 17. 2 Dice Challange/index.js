var randomNumber1 = Math.floor(Math.random() * 6 ) +1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6 ) +1;
var randomDiceImage = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent="Player 1 won!"
}else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").textContent="Player 2 won!"   
}else {
    document.querySelector("h1").textContent="Draw!"
}