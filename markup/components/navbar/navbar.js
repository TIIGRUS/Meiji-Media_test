// buttons
let buttonToggleMenu = document.querySelector('.header__menu-toggle');

// wrappers
let header = document.querySelector('.header');

// toggle menu
function toggleMenu() {
    header.classList.toggle('header_menu_is_opened');
    this.classList.toggle('button_is_active');
}

buttonToggleMenu.addEventListener('click', toggleMenu);
