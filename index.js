document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.querySelector(".historias h2");

  window.addEventListener("scroll", function () {
    var rect = textElement.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    var distanceToCenter = Math.abs(
      rect.top + rect.height / 2 - windowHeight / 2
    );

    // Definir una distancia máxima, puedes ajustar este valor según sea necesario
    var maxDistance = windowHeight / 2;

    // Calcular la opacidad en función de la distancia al centro
    var opacity = 1 - Math.min(distanceToCenter / maxDistance, 1);

    textElement.style.opacity = opacity;
  });
});
