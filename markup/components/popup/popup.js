// buttons
let buttonShowPopup = document.querySelector('.button_show_popup');
let closeButtonPopup = document.querySelector('.button-close_place_popup');

// wrappers
let popup = document.querySelector('.popup');

// toggle Popup
function togglePopup() {
    popup.classList.toggle('popup_is-opened');
}

buttonShowPopup.addEventListener('click', togglePopup);
closeButtonPopup.addEventListener('click', togglePopup);

