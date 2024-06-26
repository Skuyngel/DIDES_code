let currentStar = 0;
let filled = false;
let pressed = false;
let done = false;
let desktop = false;
if (window.screen.width > 828) {
    desktop = true
    document.getElementById("txt").innerText = "Hold space to rate yourself";
}
let interval;
let stars = document.getElementsByClassName("star");

//mobile
document.getElementById("holdbutton").addEventListener('touchstart', function () {
    pressButton();
});
document.getElementById("holdbutton").addEventListener('touchend', function () {
    releaseButton();
});

//desktop
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        pressButton();
    }
});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
        releaseButton();
    }
});

function pressButton() {
    if (!filled && !pressed) {
        pressed = true;
        interval = setInterval(fillStar, 500);
        document.getElementById("orange").style.opacity = "0";
        document.getElementById("orange").style.transition = "opacity 1s";
        document.getElementById("holdbutton").style.animation = "shrink 0.5s infinite";
        if (!desktop) {
            document.getElementById("pulse").style.display = "block";
        }
        document.getElementById("txt").innerText = "In this world so caught up in our own shit, let’s not forget what matters.";
    }
}

function releaseButton() {
    pressed = false;
    clearInterval(interval);
    document.getElementById("pulse").style.display = "none";
    if (filled) {
        if (!done) {
            done = true;
            document.getElementById("purple").style.opacity = "0";
            document.getElementById("purple").style.transition = "opacity 1s";
            document.getElementById("holdbutton").style.background = "none";
            document.getElementById("pulse").style.display = "none";
            document.getElementById("txt").innerText = "";
            document.getElementById("title").innerText = "HAPPINESS";
            animateStars();
            setTimeout(function () {
                document.getElementById("title").innerText = "NOSEDIVE";
                document.getElementById("title").style.fontSize = "2em";
                document.getElementById("txt").innerText = "Black Mirror\nSeason 3, Episode 1\ndirected by Joe Wright";
                document.getElementById("txt").style.color = "#F6F6F6";

                document.addEventListener('click', function () {
                    window.location.reload();
                });
            }, 3000);
        }
    } else {
        document.getElementById("orange").style.opacity = "1";
        document.getElementById("orange").style.transition = "opacity 1s";
    }
}

function fillStar() {
    if (currentStar >= stars.length || filled) {
        clearInterval(interval)
        //five stars filled
    } else {
        stars[currentStar].style.fill = "#B9DFB8";
        //stars[currentStar].style.filter = "drop-shadow(0px 0px 20px #EAFFEA)";
        currentStar++;
    }
    if (currentStar >= stars.length) {
        filled = true;
    }
}

function animateStars() {
    for (let i = 0; i < stars.length; i++) {
        setTimeout(function () {
            stars[i].style.animation = "fall 1s linear forwards";
            stars[i].addEventListener('animationend', function() {
                stars[i].style.background = "none";
            });
        }, Math.random() * 1000);
    }
}