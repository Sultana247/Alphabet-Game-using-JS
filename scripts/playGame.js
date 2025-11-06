

function playPage(){
     hideElementByID('home-page');
     displayElementByID('play-game');
     const ranAlpha = randomAlpha();
     setElementById('key', ranAlpha);
     changeColorbyId(ranAlpha);
}