function hideElementByID(Id){
    const element = document.getElementById(Id);
    element.classList.add('hidden');
}
function displayElementByID(Id){
    const element = document.getElementById(Id);
    element.classList.remove('hidden');
}

function randomAlpha(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);
    const randomAlphabet = alphabets[index];
    return randomAlphabet;
    
}
function setElementById(Id, final){
    const element =document.getElementById(Id);
    element.innerText = final;
}

function addColorbyId(Id){
    const key = document.getElementById(Id);
    key.classList.add('bg-orange-400');
}
function removeColorbyId(Id){
    const key = document.getElementById(Id);
    key.classList.remove('bg-orange-400');
}