var btntranslate = document.querySelector('#btn-translate');
var txtimput = document.querySelector('#txtinput');
var outputdiv = document.querySelector('#output');
var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("Error occured!",error);
}

function clickEventHandler(){
    var inputText = txtimput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btntranslate.addEventListener("click", clickEventHandler)