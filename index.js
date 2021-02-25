var randomNo1 = Math.floor(Math.random() * 6) +1;
var randomDiceimage = "dice" + randomNo1 + ".png";
var randomimagesrc = "images/" + randomDiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesrc);


var randomNo2 = Math.floor(Math.random() * 6) +1;
var randomimagesrc2 = "images/dice" + randomNo2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

 if (randomNo1 > randomNo2) {
   document.querySelector("h1").innerHTML = "Player1 Win!";
 }
 else if (randomNo2 > randomNo1) {
   document.querySelector("h1").innerHTML = "Player2 win!";
 }
 else {
   document.querySelector("h1").innerHTML = "Draw";
 }
