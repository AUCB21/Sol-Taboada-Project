const elements = [
  ".historias h2",
  // ".container-quienes-somos h2",
  // ".hache1 .text p",
  // ".hache1 .text span",
];

elements.forEach((element) => {
  document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(element);

    window.addEventListener("scroll", function () {
      const rect = textElement.getBoundingClientRect();
      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      let distanceToCenter = Math.abs(
        rect.top + rect.height / 2 - windowHeight / 2
      );

      // Definir una distancia máxima, ajustar este valor según sea necesario
      let maxDistance = windowHeight / 1.2;

      // Calcular la opacidad en función de la distancia al centro
      let opacity = 1 - Math.min(distanceToCenter / maxDistance, 1);

      textElement.style.opacity = opacity;
    });
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

// animation.js

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  document.querySelectorAll(".tareas-list li").forEach((element) => {
    const offset = element.offsetTop;
    const distance = Math.abs(scrollPosition - offset);
    const maxDistance = 150; // Ajusta según prefieras

    // Calcula el porcentaje de desplazamiento
    const percentage = Math.min(distance / maxDistance, 1);

    // Calcula el ángulo en función del desplazamiento
    const angle = percentage * Math.PI; // Convierte el porcentaje a un ángulo en radianes

    // Calcula el valor del border-radius usando funciones trigonométricas
    const borderRadius = 50 + 50 * Math.sin(angle); // Ajusta según prefieras

    // Aplica el nuevo valor al border-radius
    element.style.borderRadius = `${borderRadius}%`;
  });
});
