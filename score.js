// Iteration 5: Store the player score and display it on the game over screen
let score=localStorage.getItem("score");
console.log(score);

var scoreboard=document.getElementById("score-board");
var playagainbutton=document.getElementById("play-again-button");

scoreboard.innerHTML=score;
playagainbutton.onclick=(evt)=>{
    location.href="./game.html"
}