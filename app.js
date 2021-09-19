var btntranslate = document.querySelector('#btn-translate');
var txtimput = document.querySelector('#txtinput');

function clickEventHandler(){
    console.log('Clicked');
    console.log('input', txtimput.value);
}

btntranslate.addEventListener("click", clickEventHandler)