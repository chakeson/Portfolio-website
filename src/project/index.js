// LANGAUGE CHANGER

const langaugeData = {
    "english":{
        "scroll":"Scroll",

    },
    "swedish":{
        "scroll":"Skroll",

    }
}



function textChanger(switchToLang){
    localStorage.setItem('lang', switchToLang);
              

}

//Get the local storage stored Langauge
const storageAccess = () => {
    let startingLanguage = "english";
    if (localStorage.getItem("lang")){
        startingLanguage = localStorage.getItem("lang")
    }
    return startingLanguage;
}


function changeLang() {
    /*console.log("sdgdsgdg");*/
    var storedLang = storageAccess();
    switch (storedLang) {
        case "english":
            
            var switchToLang = "swedish";
            textChanger(switchToLang);
            document.getElementById("lang-en").classList.remove("selected");
            document.getElementById("lang-se").classList.add("selected");

            break;
        case "swedish":

            var switchToLang = "english";
            textChanger(switchToLang);
            document.getElementById("lang-se").classList.remove("selected");
            document.getElementById("lang-en").classList.add("selected");

            break;
        default:
            break;
    }

}



var currentLanguage = storageAccess();
if (currentLanguage !== "english") {
    changeLang()
}

