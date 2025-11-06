function keyboardButtonPressed(event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }
    const targetEvent = document.getElementById('key');
    const targetKey = targetEvent.innerText;
    const exactKey = targetKey.toLowerCase();
    console.log(playerPressed, exactKey);

    if(playerPressed === exactKey){
        console.log('Right key pressed');
        console.log('you have pressed ', exactKey);

// update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreValue = currentScoreElement.innerText;
      
        const scoreValue = parseInt(currentScoreValue);
       
        const newScore = scoreValue + 1;
        
        currentScoreElement.innerText = newScore;

        continueGame();
        removeColorbyId(exactKey);
    }
    else{
        console.log('please press the right key!!!');
        const currentLife = document.getElementById('current-life');
        const currentLifeValue =currentLife.innerText;
        const lifeValue = parseInt(currentLifeValue);
        const newLife = lifeValue - 1;

        currentLife.innerText = newLife;

        if(newLife === 0){
            gameOver();
            
        }
    }


}

document.addEventListener('keyup', keyboardButtonPressed);

function continueGame(){
    const ranAlpha = randomAlpha();
     setElementById('key', ranAlpha);
     addColorbyId(ranAlpha);
}

function playPage(){
     hideElementByID('home-page');
     hideElementByID('score-page');
     displayElementByID('play-game');
    // reset life 
    setElementById('current-life', 5);
    // reset score
    setElementById('current-score', 0);
    
     continueGame();
}
function gameOver(){
    hideElementByID('play-game');
    displayElementByID('score-page');
    // set the final score
    const finalScore = document.getElementById('current-score');
    const finalValue = finalScore.innerText;
    setElementById('final-score', finalValue);

    // clear current alphabet color
    const currentAlphabet = document.getElementById('key');
    const alpha = currentAlphabet.innerText;
   
    removeColorbyId(alpha);
    
    

}