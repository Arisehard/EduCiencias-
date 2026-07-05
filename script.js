// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Botón "Ir al Simulador"
const btnSimulador = document.querySelector('.card.simulador button');
if (btnSimulador) {
  btnSimulador.addEventListener('click', () => {
    window.location.href = 'simuladores.html';
  });
}

// 🔹 Preguntas frecuentes (acordeón)
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Cierra otras respuestas abiertas
    document.querySelectorAll(".faq-answer").forEach(ans => {
      if (ans !== answer) {
        ans.style.maxHeight = null;
      }
    });

    // Alterna la respuesta actual
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});





