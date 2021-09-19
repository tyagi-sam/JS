var btntranslate = document.querySelector('#btn-translate');
var txtimput = document.querySelector('#txtinput');
var outputdiv = document.querySelector('#output');

function clickEventHandler(){
    outputdiv.innerText = "sdwfdfwef" + txtimput.value
}

btntranslate.addEventListener("click", clickEventHandler)