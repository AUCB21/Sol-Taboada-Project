document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".historias h2");

  window.addEventListener("scroll", function () {
    const rect = textElement.getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let distanceToCenter = Math.abs(
      rect.top + rect.height / 2 - windowHeight / 2
    );

    // Definir una distancia máxima, puedes ajustar este valor según sea necesario
    let maxDistance = windowHeight / 1.2;

    // Calcular la opacidad en función de la distancia al centro
    let opacity = 1 - Math.min(distanceToCenter / maxDistance, 1);

    textElement.style.opacity = opacity;
  });
});

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

const queBuscamos = document.getElementById("purpouse");

queBuscamos.addEventListener("click", () => {
  scrollToSection("intro-text");
});
