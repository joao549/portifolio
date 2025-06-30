let btnMenu = document.getElementById('btn-menu');
let menu = document.querySelector('.menu-mobile');
let overlay = document.querySelector('.overlay-menu');

if (btnMenu && menu && overlay) {
    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
        overlay.style.display = 'block';
    });

    const btnFechar = menu.querySelector('.btn-fechar');
    if (btnFechar) {
        btnFechar.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
            overlay.style.display = 'none';
        });
    }

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
}
