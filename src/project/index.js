// LANGAUGE CHANGER

const langaugeData = {
    "english":{
        "scroll":"Scroll",
        "title1":"Bookmark and Dashboard",
        "title2":"Youtube downloader with GUI",
        "title3":"Wine labelmaker",
        "mainText1":"A starting page with common bookmarks allowing for easy accessability of them everywhere, a convient search function for fast finding. Secondly a dashboard which displays the weather based on the users location. Further a cryptocurrency dashboard based on the Messari API. Further useful information such as sunrise and sunset based on the users location and their IP-address.",
        "mainText2":"A python program for downloading youtube videos. It takes in urls and settings to then download the files into the specified folder. The library used for the GUI was Tkinter.",
        "mainText3":"Wine labelmaker is a python program, that takes various inputs that identify systembolaget wines and generates labels. It was made to help wine lovers be able to quickly pick matching and well suited wines that match the food. It works by taking the sytembolaget number or links and then scrapes the webiste for the information and then formats it and outputs a word file ready for printing.",
    },
    "swedish":{
        "scroll":"Skroll",
        "title1":"Bokmärkes sida med dashboard",
        "title2":"Youtube nedladdare med GUI",
        "title3":"Vin Etikett skapare",
        "mainText1":"En startsida med vanliga bokmärken som gör det lätt att komma åt dem överallt, med en praktisk sökfunktion. Även en dashboard som visar vädret baserat på användarens plats. Ytterligare en dashboard för kryptovaluta priser baserad på Messari API. Vidare än annan användbar information som soluppgång och solnedgång baserat på användarens plats och deras IP-adress.",
        "mainText2":"Ett python-program för att ladda ner YouTube-videor. Det tar in webbadresser och inställningar för att sedan ladda ner filerna till den angivna mappen. Biblioteket som användes för GUI var Tkinter.",
        "mainText3":"Vin Etikett skapare är ett python program, som tar olika indata som identifierar Systembolagets viner och genererar etiketter. Den gjordes för att hjälpa vinälskare att snabbt kunna plocka matchande och väl lämpade viner som matchar maträtter. Det fungerar genom att ta sytembolagets nummer eller länkar och sedan skrapa webbsidan efter informationen och sedan formatera den och mata ut en wordfil redo för utskrift.",
    }
}





function textChanger(switchToLang){
    localStorage.setItem('lang', switchToLang);

    var currentPage = parseInt(window.location.pathname.slice(-6,-5));
    
    switch (currentPage) {
        case 1:
            document.querySelector("body > main > h1").textContent = langaugeData[switchToLang].title1;
            document.querySelector("body > main > p").textContent = langaugeData[switchToLang].mainText1;
            break;
        case 2:
            document.querySelector("body > main > h1").textContent = langaugeData[switchToLang].title2;
            document.querySelector("body > main > p").textContent = langaugeData[switchToLang].mainText2;
            break;
        case 3:
            document.querySelector("body > main > h1").textContent = langaugeData[switchToLang].title3;
            document.querySelector("body > main > p").textContent = langaugeData[switchToLang].mainText3;
            break;
    
        default:
            break;
    }

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
    textChanger("swedish");
    document.getElementById("lang-en").classList.remove("selected");
    document.getElementById("lang-se").classList.add("selected");

}


