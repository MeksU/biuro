var backgrounds = new Array(
    'url(img/inkowie.jpeg)',
    'url(img/majowie.jpg)',
    'url(img/inkowie2.jpg)'
);

var current = 0;

function nextBackground() {
    document.getElementById("background").style.backgroundImage = backgrounds[current];
    document.getElementById("background").style.transition = "1.1s ease-in-out";

    current++;
    if (current > 2) current = 0;
}
nextBackground();
setInterval(nextBackground, 8000);