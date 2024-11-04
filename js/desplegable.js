    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        // Alternar la clase 'hidden' para mostrar/ocultar el menú
        menu.classList.toggle('hidden');
    });
