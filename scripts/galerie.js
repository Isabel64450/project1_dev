const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  window.location.href = "index.html"; // Redirige vers la page d'accueil
});

// Sélectionner toutes les images
const images = document.querySelectorAll(".gallery-image");

// Sélectionner la lightbox et l'image dedans
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Quand je clique sur une image
images.forEach((img) => {
  img.addEventListener("click", function () {
    lightboxImg.src = img.src; // Met l'image cliquée dans la lightbox
    lightbox.style.display = "flex"; // Affiche la lightbox
  });
});

// Quand je clique n'importe où dans la lightbox, elle se ferme
lightbox.addEventListener("click", function () {
  lightbox.style.display = "none";
});
