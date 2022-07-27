let popup = document.querySelector('.popup');
let nameInput = popup.querySelector('.popup__input_name');
let aboutInput = popup.querySelector('.popup__input_about');
let popupClose = popup.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__occupation');

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = aboutInput.value;
    closePopup();
}

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    aboutInput.value = userAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popup.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);