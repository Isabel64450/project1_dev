const galerie = document.getElementById("open-gallery");

galerie.addEventListener("click", function () {
  window.location.href = "galerie.html";
});

// Cible l'élément bento "Galerie"
const bentoGalerie = document.getElementById("bento-galerie");

// Ajoute un écouteur de clic
bentoGalerie.addEventListener("click", function () {
  // Redirige vers la page galerie.html
  window.location.href = "galerie.html";
});
