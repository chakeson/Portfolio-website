//Copy to clipboard function
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