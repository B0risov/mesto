import "./index.css";

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import Popup from '../components/Popup.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
    {
    name: 'Годар',
    link: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/6eee4102d99b964dc46dc4612d60f3f4/960'
    },
    {
    name: 'Гайдай',
    link: 'https://resizer.mail.ru/p/82b9786e-cb52-5210-a433-aa7472f77890/AAACJdsQzQAmTKNl6Cl3Hq68hxpdjETnCMqlTWRnFkjluWJC3gT9ZYMLF5RANS2sZr3Y4PHSkRDEuJVSZcbtBJ2L9vg.jpg'
    },
    {
    name: 'Трюффо',
    link: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/c16515c6-28b0-4fcc-b50e-3f4832fdded3/360'
    },
    {
    name: 'Хичкок',
    link: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/d62d9002-6550-4c3b-bf33-56a35da9b262/360'
    },
    {
    name: 'Бергман',
    link: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/26665b9a-1231-469f-ba02-1dd4e2ec8ac0/360'
    },
    {
    name: 'Феллини',
    link: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/0f3f57eee3d9dc4e0cd032da6f55e331/960x540'
    }
    ];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__user',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const nameInputProfile = document.querySelector('.popup__user_type_name');
const jobInputProfile = document.querySelector('.popup__user_type_vocation');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const cardTemplate = document.querySelector('#grid-card-template');

const userInfo = new UserInfo('.profile__user-name', '.profile__user-vocation');
const popupProfile = new Popup('#popup-profile');
const popupCard = new Popup('#popup-card');
const popupWithImage = new PopupWithImage('#popup-card-image');

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        cardList.addItem(card);
    }
}, '.grid-cards');

const popupWithCardPopup = new PopupWithForm('#popup-card', (item) => {
    cardList.addItem(createCard({name: item.denomination, link: item.link}));
    popupWithCardPopup.close();
});

const popupWithProfilePopup = new PopupWithForm('#popup-profile', (item) => {
    userInfo.setUserInfo(item);
    popupWithProfilePopup.close();
});

const formValidators = {};

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        const formName = formElement.getAttribute('name');

        formValidators[formName] = validator;
        validator.enableValidation();
    });
};

function createCard(item) {
    const card = new Card(item, cardTemplate, () => popupWithImage.open(item));

    return card.createCard();
}

enableValidation(validationConfig);

editButton.addEventListener('click', () => {
    const data = userInfo.getUserInfo();
    nameInputProfile.value = data.user;
    jobInputProfile.value = data.vocation;

    formValidators['popup-form-profile'].resetValidation();

    popupProfile.open();
});

addButton.addEventListener('click', () => {
    formValidators['popup-form-card'].resetValidation();
    popupCard.open();
});

popupWithProfilePopup.setEventListeners();
popupWithCardPopup.setEventListeners();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupWithImage.setEventListeners();
cardList.renderItems();