function losuj(){
    var losowa = Math.floor(Math.random()*(4-2)+2);
    document.getElementById("img-los").src = "img/prom" + losowa + ".jpg";

    var tytul = ["Jedź tu z nami, Aztekami", "Państwo Inków dla fanów Muminków"];
    document.getElementById("nag-los").innerHTML = tytul[losowa-2];

    var tresc = ["Wygraj wycieczkę do Teotihuacanu - świętego miasta Azteków! Aby wygrać musisz wysłać SMS o treści NIGDYNIEWYGRAM na nr 0997.",
                 "Oglądając Muminki na dobranoc znajdziesz kody rabatowe na wycieczkę do państwa Inków, nie zwlekaj, włącz telewizor i poluj na kody!"];
    document.getElementById("los").innerHTML = tresc[losowa-2];
}
losuj();