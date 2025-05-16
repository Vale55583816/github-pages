document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.id = 'mobile-nav';
    
    // Clonar la estructura del menú principal para móviles
    const navLinks = document.querySelector('.nav-links');
    const cloneNav = navLinks.cloneNode(true);
    
    // Ajustar el menú clonado para móvil
    cloneNav.querySelectorAll('ul').forEach(submenu => {
        submenu.classList.add('mobile-submenu');
        submenu.style.display = 'none';
    });
    
    // Añadir el menú móvil al DOM
    mobileNav.appendChild(cloneNav);
    document.querySelector('.barra').appendChild(mobileNav);
    
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

    // Manejar clics en enlaces del menú móvil
    mobileNav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            const submenu = e.target.nextElementSibling;
            if (submenu && submenu.classList.contains('mobile-submenu')) {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
            } else {
                toggleMenu();
            }
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
});
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Crear menú móvil
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.id = 'mobile-nav';
    document.querySelector('.barra').appendChild(mobileNav);
    
    // Clonar el menú principal para móvil
    const mobileMenuContent = navLinks.cloneNode(true);
    mobileMenuContent.id = 'mobile-nav-links';
    mobileNav.appendChild(mobileMenuContent);
    
    // Convertir los submenús para móvil
    const dropdowns = mobileNav.querySelectorAll('.dropdown-menu, .nested-dropdown-menu');
    dropdowns.forEach(dropdown => {
        dropdown.classList.add('mobile-submenu');
        const parentLink = dropdown.parentNode.querySelector('a');
        parentLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            }
        });
    });
    
    // Función para alternar el menú
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
    }
    
    // Evento del botón hamburguesa
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Cerrar menú al hacer clic en un enlace
    mobileNav.querySelectorAll('a').forEach(link => {
        if (!link.nextElementSibling || !link.nextElementSibling.classList.contains('mobile-submenu')) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
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