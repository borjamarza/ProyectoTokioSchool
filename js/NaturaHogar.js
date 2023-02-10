let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}


/* var imagenes = document.getElementsByClassName('imagenAmpliable');

for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('mouseover', function() {
    imagenes[0].style.width = '120%';
    imagenes[0].style.height = '120%';
  });
  imagenes[i].addEventListener('mouseout', function() {
    imagenes[0].style.width = '100%';
    imagenes[0].style.height = '100%';
  });
} */

var imagenes = document.getElementsByClassName('imagenAmpliable');

Array.from(imagenes).forEach(function(imagen) {
  imagen.addEventListener('mouseover', function() {
    // Acción para ampliar la imagen
    imagen.style.width = '100%';
    /* imagen.style.height = '100%'; */
  });
  imagen.addEventListener('mouseout', function() {
    // Acción para reducir la imagen
    imagen.style.width = '80%';
    /* imagen.style.height = '80%'; */
  });
});