var score , roundScore , activePlayer ;
function init()
{
        roundScore=0;
        score=[0,0];
        activePlayer=0;
        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
        document.querySelector('#score-0').textContent='0';
        document.querySelector('#score-1').textContent='0';
        document.querySelector(".player-0-panel").classList.remove('active');
        document.querySelector(".player-1-panel").classList.remove('active');
        document.querySelector(".player-0-panel").classList.add('active');
        document.querySelector(".dice").style.display="none";
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
        document.querySelector("#name-"+activePlayer).textContent="Player 1 ";

}

init();

document.querySelector(".btn-roll").addEventListener("click" , function()
                     {
    var dice = Math.ceil(6*Math.random());
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display="block";
    diceDOM.src="dice-"+dice+".png";
    if(dice!== 1)
    {
        roundScore+=dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
    }
    else
    {
        document.getElementById("current-"+activePlayer).textContent='0';
        document.querySelector(".player-" + activePlayer+"-panel").classList.remove('active');
        activePlayer === 1 ? activePlayer=0 : activePlayer=1;
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("active");
        roundScore=0;
        diceDOM.style.display="none";
        
    }
});


document.querySelector(".btn-hold").addEventListener("click" , function()
        {
    
    
            score[activePlayer]+= roundScore;
            document.getElementById("score-"+activePlayer).textContent=score[activePlayer];
            if(score[activePlayer]>=15)
            {
                alert("Player "+(activePlayer+1)+" Won!");
                document.querySelector("#name-"+activePlayer).textContent="WINNER!!";
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                activePlayer === 1 ? activePlayer=0 : activePlayer=1;

                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            }
            roundScore=0;
            document.querySelector("#current-"+activePlayer).textContent='0';
            document.querySelector(".player-" + activePlayer+"-panel").classList.remove('active');
            activePlayer===1? activePlayer=0: activePlayer=1;
            document.querySelector("#current-"+activePlayer).textContent='0';
            document.querySelector(".dice").style.display="none";
            document.querySelector(".player-" + activePlayer+"-panel").classList.add('active');
        
        });

document.querySelector(".btn-new").addEventListener("click" , init);