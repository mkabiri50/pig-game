var scores, roundscore, activeplayer, dice,gameplayer ;
init();

    function btn(){
        if (gameplaying) {
        //random number
        dice = Math.floor(Math.random()*6)+1;
        //display result
       var dicedom = document.querySelector(".dice");
       dicedom.style.display = "block";
       dicedom.src="dice-"+dice +".png";
        // document.querySelector("#current-" +activeplayer).textContent = dice;
        if (dice!==1) {
            roundscore += dice;
            document.querySelector("#current-" +activeplayer).textContent = roundscore;
        }else {
            nextplayer();
        }
    }
}

document.querySelector(".btn-roll").addEventListener("click",btn);


document.querySelector(".btn-hold").addEventListener("click",function() {
    if (gameplaying) {
        scores[activeplayer] += roundscore;
    document.querySelector("#score-"+ activeplayer).textContent = scores[activeplayer];
   if (scores[activeplayer] >= 20) 
   {
       document.getElementById("name-" + activeplayer).textContent = "winner";
       document.querySelector(".dice").style.display = "none"; 
       document.querySelector(".player-" + activeplayer+ "-panel").classList.add("winner");
       document.querySelector(".player-" + activeplayer+ "-panel").classList.remove("active");
        gameplaying = false;
    }else{
        nextplayer();
    }
    }
});  

function nextplayer() {
    activeplayer ===0 ? activeplayer =1 :activeplayer =0;
    roundscore=0;
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none"; 
}
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
scores =[0,0];
roundscore =0;
activeplayer =0;
gameplaying =true;
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
document.querySelector(".dice").style.display = "none";
document.getElementById("name-0" ).textContent = "player 1";
document.getElementById("name-1" ).textContent = "player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
}