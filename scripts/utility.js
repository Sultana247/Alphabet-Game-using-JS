function hideElementByID(Id){
    const element = document.getElementById(Id);
    element.classList.add('hidden');
}
function displayElementByID(Id){
    const element = document.getElementById(Id);
    element.classList.remove('hidden');
}