function scrolluj() {
    scroll(0, 0);
}

window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    
    if (scroll > 100)this.document.getElementById("dogory").style.opacity = 1;
    else this.document.getElementById("dogory").style.opacity = 0;
})