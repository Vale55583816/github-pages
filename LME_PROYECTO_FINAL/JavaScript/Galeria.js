// Espera que todo el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Selecciona el carrusel
    const track = document.querySelector('.carrusel-track');

    // Todas las imágenes dentro del carrusel
    const slides = document.querySelectorAll('.carrusel-track img');

    // Botón "anterior"
    const btnPrev = document.querySelector('.carrusel-btn.prev');

    // Botón "siguiente"
    const btnNext = document.querySelector('.carrusel-btn.next');

    // Variable para llevar el índice actual de la imagen mostrada
    let index = 0;

    // Función que actualiza el carrusel moviendo el contenedor a la posición correcta
    function updateCarousel() {
        const width = slides[0].clientWidth; // Ancho de una imagen
        track.style.transform = `translateX(-${index * width}px)`; // Se mueve horizontalmente
    }

    // Cuando se presiona "siguiente"
    btnNext.addEventListener('click', () => {
        index = (index + 1) % slides.length; // Avanza al siguiente  y si llega al final, regresa al inicio.
        updateCarousel(); // Actualiza la posición del carrusel
    });

    // Cuando se presiona "anterior"
    btnPrev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length; // Retrocede al  anterior y si está en el primero, va al último
        updateCarousel(); // Actualiza la posición del carrusel
    });

    // Se activa si cambias el tamaño de la ventana
    // Calcula el ancho y ajusta la posición del carrusel
    window.addEventListener('resize', updateCarousel);

    // Llama la función al inicio para que se posicione correctamente
    updateCarousel();
});
