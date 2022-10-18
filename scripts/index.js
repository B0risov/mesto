import Card from './Card.js';
import FormValidator from './FormValidator.js';
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

const popupProfile = document.querySelector('#popup-profile');
const nameInputProfile = popupProfile.querySelector('.popup__user_type_name');
const jobInputProfile = popupProfile.querySelector('.popup__user_type_about');

const editButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userVocation = document.querySelector('.profile__about');

const popupCard = document.querySelector('#popup-card');
const addButton = document.querySelector('.profile__add-button');
const titleCard = document.querySelector('.popup__user_type_person');
const linkCard = document.querySelector('.popup__user_type_link-image');

const popupImage = document.querySelector('#popup-card-image');
const cardTitleImage = popupImage.querySelector('.popup-card__title');
const cardBigImage = popupImage.querySelector('.popup-card__image');

const cardTemplate = document.querySelector('#grid-card-template');
const cardsContainer = document.querySelector('.grid-cards');

const closePopupByClickOnOverLayOrButton = (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
        closePopup(evt.currentTarget);
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", handleEscapePopup);
    popup.removeEventListener('mousedown', closePopupByClickOnOverLayOrButton);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", handleEscapePopup);
    popup.addEventListener('mousedown', closePopupByClickOnOverLayOrButton);
}

function handleEscapePopup(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}
function renderCard(card) {
    cardsContainer.prepend(card);
}

function handleCardClick(name, link) {
    cardTitleImage.textContent = name;
    cardBigImage.src = link;
    cardBigImage.alt = name;
    openPopup(popupImage);
}

function createCard(item) {
    const card = new Card(item, cardTemplate, handleCardClick);

    return card.createCard();
}

for (const initialCard of initialCards) {
    const cardElement = createCard(initialCard);
    renderCard(cardElement);
}

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

enableValidation(validationConfig);

popupCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const item = {
        name: titleCard.value,
        link: linkCard.value
    }

    const card = new Card(item, cardTemplate, handleCardClick);
    const cardElement = card.createCard();

    renderCard(cardElement);

    closePopup(popupCard);
    evt.target.reset();
});
popupProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    userName.textContent = nameInputProfile.value;
    userVocation.textContent = jobInputProfile.value;
    closePopup(popupProfile);
});
editButton.addEventListener('click', () => {
    nameInputProfile.value = userName.textContent;
    jobInputProfile.value = userVocation.textContent;

    formValidators['popup-form-profile'].resetValidation();

    openPopup(popupProfile);
});

addButton.addEventListener('click', () => {
    formValidators['popup-form-card'].resetValidation();
    openPopup(popupCard);
});