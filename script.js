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






