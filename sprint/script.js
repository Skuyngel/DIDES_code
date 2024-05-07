let currentStar = 0;
let interval;
let stars = document.getElementsByClassName("star");

document.getElementById("holdbutton").addEventListener('touchstart', function(){
    interval = setInterval(fillStar, 500);
    document.getElementById("background").style.background = "radial-gradient(72.61% 62.61% at 50% 50%, #F7C8FF 0%, #9E87DF 100%)";
    document.getElementById("holdbutton").style.animation = "shrink 0.5s infinite";
});
document.getElementById("holdbutton").addEventListener('touchend', function(){
    clearInterval(interval);
    if(currentStar >= stars.length) {
        document.getElementById("background").style.background = "radial-gradient(72.61% 62.61% at 50% 50%, rgb(79 79 79) 0%, rgb(39, 39, 39) 100%)"
        document.getElementById("content").style.background = "url(Untitled_Artwork.png)"
        document.getElementById("holdbutton").style.background = "none";
    }
});

function fillStar(){
    if(currentStar >= stars.length){
        clearInterval(interval)
        //five stars filled
    } else {
        stars[currentStar].style.fill = "#B9DFB8"; //#EAFFEA
        stars[currentStar].style.filter = "drop-shadow(0px 0px 20px white)";
        currentStar++;
    }
}