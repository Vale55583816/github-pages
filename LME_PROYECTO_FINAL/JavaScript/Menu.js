

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    
    // Función para alternar el menú
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
    }

    // Evento para el botón del menú hamburguesa
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Manejar clics en enlaces con submenús
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        if (link.nextElementSibling && link.nextElementSibling.classList.contains('mobile-submenu')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle('active');
                
                // Rotar icono de flecha
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            });
        }
    });

    // Cerrar menú al hacer clic en enlaces sin submenú
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        if (!link.nextElementSibling || !link.nextElementSibling.classList.contains('mobile-submenu')) {
            link.addEventListener('click', function() {
                toggleMenu();
            });
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileNav.contains(e.target)) {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        }
    });

    // Ajustar en redimensionamiento
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});