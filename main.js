//dice1 
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
var randomDiceSrc1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomDiceSrc1);


//dice2
var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
var randomDiceSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomDiceSrc2);

//winner heading
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}