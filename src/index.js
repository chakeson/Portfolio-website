//Slide out menu trigger by class toggle
const menuElement = document.querySelector("body > main > nav.menu");
menuElement.addEventListener("click",openMenu)

function openMenu(){
    let menu = document.querySelector(".menu");
    let menuPopout = document.querySelector(".menu-popout");

    menu.classList.toggle("active")
    menuPopout.classList.toggle("active")
}


//Gets called to do hover for the menu hamburger button.
function menuOver(){
    document.documentElement.style.setProperty("--menu-color","#000")
}
function menuOut() {
    document.documentElement.style.setProperty("--menu-color","#747474")
}


// LANGAUGE CHANGER

const langaugeData = {
    "english":{
        "scroll":"Scroll",
        "projects":"Projects",
        "val":"All",
        "pro1title":"Bookmark and Dashboard",
        "pro1read":"Read more",
        "pro1preview":"Live preview",
        "pro2title":"Youtube downloader with GUI",
        "pro2read":"Read more",
        "pro3title":"Wine labelmaker",
        "pro3read":"Read more",
        "competens":"Competencies",
        "competensTitle3":"Engineering & design",
        "competensTitle3Add":"Addative manefacturing",
        "competensTitle3Sub":"Subtractive manefacturing",
        "competensTitle3Mat":"Material choices",
        "contact":"Contact me",
        "contactname":"Name:",
        "contactmsg":"Message:", 
        "contactsubmit":"Submit",
        "menustart":"Start",
        "menuprojekt":"Project",
        "menucompetencies":"Competencies",
        "menucontact":"Contact",
    },
    "swedish":{
        "scroll":"Skroll",
        "projects":"Projekt",
        "val":"Alla",
        "pro1title":"Bokmärkes sida med dashboard",
        "pro1read":"Mer info",
        "pro1preview":"Live länk",
        "pro2title":"Youtube nedladdare med GUI",
        "pro2read":"Mer info",
        "pro3title":"Vin Etikett skapare",
        "pro3read":"Mer info",
        "competens":"Kompetenser",
        "competensTitle3":"Teknik & design",
        "competensTitle3Add":"Additiv tillverkning",
        "competensTitle3Sub":"Subtraktiv tillverkning",
        "competensTitle3Mat":"Materialval",
        "contact":"Kontakt",
        "contactname":"Namn:",
        "contactmsg":"Meddelande", 
        "contactsubmit":"Skicka",
        "menustart":"Start",
        "menuprojekt":"Projekt",
        "menucompetencies":"Kompetenser",
        "menucontact":"Kontakt",
    }
}



function textChanger(switchToLang){


    localStorage.setItem('lang', switchToLang);
               
    //document.getElementById("start").childNodes[13].textContent = langaugeData[switchToLang].scroll;
    document.getElementById("scroll").textContent = langaugeData[switchToLang].scroll;
    /*console.log(document.getElementById("scroll"))*/
    document.querySelector("body > main > section.content-screen > div > h1.flex.flex-center-x.title5").textContent = langaugeData[switchToLang].projects;
    document.querySelector("#btn-all > h2").textContent = langaugeData[switchToLang].val;
    
    //Projects selector
    document.getElementById("pro1").childNodes[3].textContent = langaugeData[switchToLang].pro1title;
    document.getElementById("pro1").childNodes[5].childNodes[0].textContent = langaugeData[switchToLang].pro1read;
    document.querySelector("#pro1 > div > a:nth-child(1) > div").textContent = langaugeData[switchToLang].pro1preview;
    
    document.getElementById("pro2").childNodes[3].textContent = langaugeData[switchToLang].pro2title;
    document.getElementById("pro2").childNodes[5].childNodes[0].textContent = langaugeData[switchToLang].pro2read;
    
    
    document.getElementById("pro3").childNodes[3].textContent = langaugeData[switchToLang].pro3title;
    document.getElementById("pro3").childNodes[5].childNodes[0].textContent = langaugeData[switchToLang].pro3read;
    
    //Competencies selector
    document.getElementById("Competencies").textContent = langaugeData[switchToLang].competens;
    document.querySelector("body > main > section.content-screen > div > div.competency > div:nth-child(5) > h2").textContent =  langaugeData[switchToLang].competensTitle3;
    document.querySelector("body > main > section.content-screen > div > div.competency > div:nth-child(5) > ul > li:nth-child(3)").textContent =  langaugeData[switchToLang].competensTitle3Add;
    document.querySelector("body > main > section.content-screen > div > div.competency > div:nth-child(5) > ul > li:nth-child(4)").textContent =  langaugeData[switchToLang].competensTitle3Sub;
    document.querySelector("body > main > section.content-screen > div > div.competency > div:nth-child(5) > ul > li:nth-child(5)").textContent =  langaugeData[switchToLang].competensTitle3Mat;
    
    //Contact section selector
    document.getElementById("contact").textContent = langaugeData[switchToLang].contact;
    try {
        document.querySelector("body > main > section.content-screen > div > div.contact-card > div.contact-form > form > p:nth-child(1) > label").childNodes[0].textContent = langaugeData[switchToLang].contactname;
    } catch (error) {
        document.querySelector("body > main > section.content-screen > div > div.contact-card > div.contact-form > form > p:nth-child(2) > label").childNodes[0].textContent = langaugeData[switchToLang].contactname;
    }
    
    document.querySelector("body > main > section.content-screen > div > div.contact-card > div.contact-form > form > p:nth-child(3) > label").childNodes[0].textContent = langaugeData[switchToLang].contactmsg;
    document.querySelector("body > main > section.content-screen > div > div.contact-card > div.contact-form > form > p:nth-child(4) > button").textContent = langaugeData[switchToLang].contactsubmit;
    
    //Popout Menu selector
    document.querySelector("body > main > nav.menu-popout > ul > a:nth-child(1) > li").textContent = langaugeData[switchToLang].menustart;
    document.querySelector("body > main > nav.menu-popout > ul > a:nth-child(2) > li").textContent = langaugeData[switchToLang].menuprojekt;
    document.querySelector("body > main > nav.menu-popout > ul > a:nth-child(3) > li").textContent = langaugeData[switchToLang].menucompetencies;
    document.querySelector("body > main > nav.menu-popout > ul > a:nth-child(4) > li").textContent = langaugeData[switchToLang].menucontact;
   
}

//Get the local storage stored Langauge
const storageAccess = () => {
    let startingLanguage = "english";
    if (localStorage.getItem("lang")){
        startingLanguage = localStorage.getItem("lang")
    }
    return startingLanguage;
}


document.querySelector("#lang").addEventListener("click",changeLang);
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












//TAB SLIDER
function tabSelector(event) {
    document.getElementById("btn-all").classList.remove("btn-selected");
    document.getElementById("btn-web").classList.remove("btn-selected");
    document.getElementById("btn-python").classList.remove("btn-selected");
    event.currentTarget.classList.add("btn-selected")
    //console.log(event.currentTarget.classList.add("btn-selected"))
    /*console.log(event.currentTarget.id);*/

    switch (event.currentTarget.id) {
        case "btn-all":
            document.getElementById("pro1").classList.remove("hidden")
            document.getElementById("pro2").classList.remove("hidden")
            document.getElementById("pro3").classList.remove("hidden")
            break;
    
        case "btn-web":
            document.getElementById("pro1").classList.remove("hidden")
            document.getElementById("pro2").classList.add("hidden")
            document.getElementById("pro3").classList.add("hidden")
            break;

        case "btn-python":
            document.getElementById("pro1").classList.add("hidden")
            document.getElementById("pro2").classList.remove("hidden")
            document.getElementById("pro3").classList.remove("hidden")
            break;

        default:
            break;
    }
}

document.getElementById("btn-all").addEventListener("click",tabSelector);
document.getElementById("btn-web").addEventListener("click",tabSelector);
document.getElementById("btn-python").addEventListener("click",tabSelector);



// Magnifaction glass
const zoom = 3;


function artOver() {
    document.getElementById("scope-background").classList.remove("hidden");
}

function artOut() {
    document.getElementById("scope-background").classList.add("hidden");
}



function scope(){
    function moveMagnifier(e) {

        
        e.preventDefault();

        var pos = cursorPosition(e);
        var x = pos.x; var y = pos.y;

        if (x > bild.getBoundingClientRect().width - (widthScope / zoom)) {
            x = bild.getBoundingClientRect().width - (widthScope / zoom);
        }

        if (x < widthScope / zoom) {
            x = widthScope / zoom;
        }

        if (y > bild.getBoundingClientRect().height - (heightScope / zoom)) {
            y = bild.getBoundingClientRect().height - (heightScope / zoom);
        }

        if (y < heightScope / zoom) {
            y = heightScope / zoom;
        }
        scopeBackgroundDiv = document.getElementById("scope-background");
        scopeBackgroundDiv.style.left = (x - widthScope) + "px";
        scopeBackgroundDiv.style.top = (y - heightScope/2) + "px";

        scopeDiv.style.backgroundPosition = "-" + ((x * zoom) - widthScope + zoom) + "px -" + ((y * zoom) - heightScope + zoom) + "px";
    }
    function cursorPosition(e) {
        var x = 0; var y = 0;
        e = e || window.event;
        var bildDiv = bild.getBoundingClientRect();
        x = e.pageX - bildDiv.left;
        y = e.pageY - bildDiv.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
    
    //Turn of the cursor done here
    scopeContainerDiv = document.getElementById("scope-container");
    scopeContainerDiv.style.cursor = "none";
    


    scopeDiv = document.getElementById("scope");
    bild = document.getElementById("intro");
    

    var backgroundSizeVarScope;
    function resizerChanger(backgroundSizeVarScope){
        bild = document.getElementById("intro");
        backgroundSizeVarScope = `${bild.getBoundingClientRect().width * zoom}px ${bild.getBoundingClientRect().height * zoom}px`;
        scopeDiv.style.backgroundSize = backgroundSizeVarScope; 
        return backgroundSizeVarScope
    }
    backgroundSizeVarScope = resizerChanger(backgroundSizeVarScope);
    window.addEventListener('resize', resizerChanger);


    scopeDiv.style.backgroundSize = backgroundSizeVarScope; 
    
    /*console.log(scopeDiv.getBoundingClientRect());*/

    widthScope = 75;//check scope size in css sheet
    heightScope = 75;//
    
    //console.log(heightScope);
    
    scopeDiv.addEventListener("mousemove", moveMagnifier);
    bild.addEventListener("mousemove", moveMagnifier);
    scopeDiv.addEventListener("touchmove", moveMagnifier);
    bild.addEventListener("touchmove", moveMagnifier);    
}
scope();













//Copy to clipboard function
document.querySelector("body > main > section.content-screen > div > div.contact-card > div.flex.flex-column > a:nth-child(1) > div > img").addEventListener("click",clipboardWriteEmail)
function clipboardWriteEmail (event) {
    event.preventDefault();
    navigator.clipboard.writeText("carlhenrik.akeson@gmail.com");
}


  









//Scroll snapping

/*
const goToTop = () => {
    document.getElementById("content-start").scrollIntoView({behavior: 'smooth',block: 'start',inline: 'center'});
}

const goToContent = () => {
    document.getElementById("start").scrollIntoView({behavior: 'smooth',block: 'center',inline: 'center'});
}
*/
/*
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(event){ // or window.addEventListener("scroll"....
    //Start tag size
    event.preventDefault()
    let box = document.getElementById("start").clientHeight;
    //distance from top of content
    let rect = document.getElementById("content-start").getBoundingClientRect().top;
    let combo = box-rect;
    //console.log("Rect: " + rect + " Box: "+box +" Combo: "+combo);
    //console.log("3");
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        if ((combo>0) && rect<box) { // downscroll code
            console.log("1");
            //setTimeout(() => {document.getElementById("content-start").scrollIntoView({behavior: 'smooth',block: 'start',inline: 'center'});},3000)
            setTimeout(() => {goToContent();} , 1000);
            
        }
   } else { // upscroll code
        if ((combo>0) && rect>0) {
                console.log("2");
                //setTimeout(() => {document.getElementById("start").scrollIntoView({behavior: 'smooth',block: 'center',inline: 'center'});},3000)
                setTimeout(() => {goToTop();} , 1000);
                
        }
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
*/
/*
window.addEventListener('wheel', function(event) {
    let box = document.getElementById("start").clientHeight;
    //distance from top of content
    let rect = document.getElementById("content-start").getBoundingClientRect().top;
    let combo = box-rect;
    console.log("Rect: " + rect + " Box: "+box +" Combo: "+combo);

    if (event.deltaY < 0) {
        if (rect>=0) {
            console.log("1");
            document.getElementById("start1").scrollIntoView({behavior: 'smooth',block: 'center',inline: 'center'});
        }
        console.log('scrolling up');
    }
    else if (event.deltaY > 0) {
        if (rect>=0) {
            console.log("2");
            document.getElementById("content-start").scrollIntoView({behavior: 'smooth',block: 'start',inline: 'center'});
        }
        console.log('scrolling down');
    }
});
*/