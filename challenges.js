var scores, roundscore, activeplayer, dice, gameplayer;
init();
var lastdice;
document.querySelector(".btn-roll").addEventListener("click",function(){
   if (gameplayer) {
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
     document.getElementById("dice-1").style.display="block";
     document.getElementById("dice-2").style.display="block";
     document.getElementById("dice-1").src ="dice-"+ dice1 + ".png";
     document.getElementById("dice-2").src ="dice-"+ dice2+ ".png";
    if (dice ===6 && lastdice ===6) {
        scores[activeplayer] =0;
        document.getElementById("score-"+activeplayer).textContent= 0;
        nextplayer();
    }else if (dice1!==1 && dice2 !==1) {
        roundscore += dice1 + dice2;
        document.getElementById("current-"+activeplayer).textContent =roundscore;
    }else{
        nextplayer();
    }
   }
   lastdice =dice;
})
document.querySelector(".btn-hold").addEventListener("click", function () {
    scores[activeplayer] += roundscore;
    document.getElementById("score-"+activeplayer).textContent=  scores[activeplayer];
   var input = document.querySelector(".final-score").value;
   var winningscore;
   if (input) {
    winningscore =input;
   }else{
       winningscore = 100;
   }

       if (  scores[activeplayer] >= winningscore) {
        document.getElementById("name-"+activeplayer).textcontent =("winner");
        document.getElementById("dice-1").style.display="none";
        document.getElementById("dice-2").style.display="none";
        document.querySelector(".player-"+activeplayer +"-panel").classList.remove("active");
        document.querySelector(".player-"+activeplayer +"-panel").classList.add("winner");
        gameplayer =false;

    }else {
        nextplayer();
    }
})
function nextplayer() {
    activeplayer ===0? activeplayer=1:activeplayer =0;
    roundscore =0;
    document.getElementById("current-0").textContent ="0";
    document.getElementById("current-1").textconent ="0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.getElementById("dice-1").style.display="none";
    document.getElementById("dice-2").style.display="none";
}
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores =[0,0];
    roundscore =0;
    activeplayer =0;
    gameplayer =true;
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent ="0";
    document.getElementById("current-1").textconent ="0";
    document.getElementById("dice-1").style.display="none";
 document.getElementById("dice-2").style.display="none";
    document.getElementById("name-0").textcontent ="palayer 1";
    document.getElementById("name-1").textContent ="player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");

}