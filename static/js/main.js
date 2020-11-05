"use strict";
"use strict";

// buttons
var buttonToggleMenu = document.querySelector('.header__menu-toggle'); // wrappers

var header = document.querySelector('.header'); // toggle menu

function toggleMenu() {
  header.classList.toggle('header_menu_is_opened');
  this.classList.toggle('button_is_active');
}

buttonToggleMenu.addEventListener('click', toggleMenu);
"use strict";

// buttons
var buttonShowPopup = document.querySelector('.button_show_popup');
var closeButtonPopup = document.querySelector('.button-close_place_popup'); // wrappers

var popup = document.querySelector('.popup'); // toggle Popup

function togglePopup() {
  popup.classList.toggle('popup_is-opened');
}

buttonShowPopup.addEventListener('click', togglePopup);
closeButtonPopup.addEventListener('click', togglePopup);