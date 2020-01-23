const anchor = document.getElementById('anchor')
var oferta = [
    'Piękne, górzyste tereny Inków - 4000 PLN',
    'Poznaj Inków i ich obyczaje - 3000 PLN',
    'Śladami Majów i Azteków - 3550 PLN',
    'Spotkanie z cywilizacją Azteków - 2900 PLN',
    'Powędruj z nami, Majami - 3200 PLN'
];

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  window.clearInterval(int);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  anchor.innerHTML = oferta[slideIndex - 1];
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function auto(){
  var ile = 0;
  ile++;
  if(ile == 5) ile = 0;
  plusSlides(ile);
}
var int = setInterval(auto, 8000);

function komunikat(){
  alert("Fajna oferta!")
}