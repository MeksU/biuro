function dowakacji() {
    var date = new Date();
    var dzis = date.getTime();
    var wakacje = new Date(2020, 5, 26, 10);
    var ms = wakacje.getTime();
    var time = ms - dzis;
    var dni = Math.floor((time) / 1000 / 60 / 60 / 24);
    time = time - dni * (1000 * 60 * 60 * 24);
    var godz = Math.floor((time) / 1000 / 60 / 60);
    time = time - godz * (1000 * 60 * 60);
    var min = Math.floor((time) / 1000 / 60);
    time = time - min * (1000 * 60);
    var sek = Math.floor((time) / 1000);
    
    var hours = " godzin ";
    if(godz == 1) hours = " godzina ";
    else if(godz == 2 || godz == 3 || godz == 4|| godz == 22 || godz == 23) hours = " godziny ";

    var minutes = " minut ";
    if(min == 1) minutes = " minuta ";
    else if(min == 12 || min == 13 || min == 14) minutes = " minunt "
    else if(min%10 == 2 || min%10 == 3 || min%10 == 4 ) minutes = " minunty ";

    var seconds = " sekund";
    if(sek == 1) seconds = " sekunda";
    else if(sek == 12 || sek == 13 || sek == 14) seconds = " sekund"
    else if(sek%10 == 2 || sek%10 == 3 || sek%10 == 4 ) seconds = " sekundy";

    document.getElementById("wakacje").innerHTML = "Do wakacji zostało " + dni + " dni " + godz + hours + min + minutes +"i " + sek + seconds +"!";
}
dowakacji();
setInterval(dowakacji, 1000);

function czas() {
    var date = new Date();
    var godz = date.getHours();
    var min = date.getMinutes();
    if (min < 10) min = "0" + min;
    var sek = date.getSeconds();
    if (sek < 10) sek = "0" + sek;

    document.getElementById("aktualny").innerHTML = "Aktualny czas: " + godz + ":" + min + ":" + sek;
}
czas();
setInterval(czas, 1000);

function todaysDate(){
    var date = new Date();
    var dzien = date.getDate();
    var mies = date.getMonth();
    var rok = date.getFullYear();

    var miesiace = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Październik", "Listopad", "Grudzień"];

    document.getElementById("data").innerHTML = dzien + " " + miesiace[mies] + " " + rok;
}
todaysDate();
