const abrirBtns = document.querySelectorAll('.abrir-btn');
let abierta = null;

abrirBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cardIndex = btn.getAttribute('data-card');
    const tarjeta = document.getElementById('card' + cardIndex);
    const parrafo = document.getElementById('parrafo' + cardIndex);

    // Cierra cualquier otra abierta
    if (abierta && abierta !== cardIndex) {
      document.getElementById('card' + abierta).classList.remove('mover');
      document.getElementById('parrafo' + abierta).classList.remove('visible');
      document.querySelector('.abrir-btn[data-card="' + abierta + '"]').textContent = "Abrir";
    }

    // Alterna abrir/cerrar de la seleccionada
    if (!tarjeta.classList.contains('mover')) {
      tarjeta.classList.add('mover');
      setTimeout(() => {
        parrafo.classList.add('visible');
        btn.textContent = "Cerrar";
        abierta = cardIndex;
      }, 400);
    } else {
      parrafo.classList.remove('visible');
      setTimeout(() => {
        tarjeta.classList.remove('mover');
        btn.textContent = "Abrir";
        abierta = null;
      }, 400);
    }
  });
});