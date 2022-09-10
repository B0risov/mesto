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

const popupProfile = document.querySelector('#popup-profile');
const nameInputProfile = popupProfile.querySelector('.popup__user_type_name');
const jobInputProfile = popupProfile.querySelector('.popup__user_type_about');

const editButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

const popupCard = document.querySelector('#popup-card');
const addButton = document.querySelector('.profile__add-button');
const titleCard = document.querySelector('.popup__user_type_person');
const linkCard = document.querySelector('.popup__user_type_link-image');

const popupImage = document.querySelector('#popup-card-image');
const cardTitleImage = popupImage.querySelector('.popup-card__title');
const cardBigImage = popupImage.querySelector('.popup-card__image');

const cardTemplate = document.querySelector('#grid-card-template').content;
const cardsContainer = document.querySelector('.grid-cards');

const closePopupByClickOnOverLayOrButton = (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
        closePopup(evt.currentTarget);
    }
}

function addLikeActiveListener(card) {
    const likeActive = card.querySelector('.grid-card__like');

    likeActive.addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid-card__like_active');
    });
}

function initImagePopup(title, link) {
    cardTitleImage.textContent = title;
    cardTitleImage.alt = title;
    cardBigImage.src = link;
}

function addEventOpenImageListener(card, title, link) {
    const cardBigImage = card.querySelector('.grid-card__image');

    cardBigImage.addEventListener('click', () => {
        openPopup(popupImage);
        initImagePopup(title, link);
    });
}

function addDeleteCardEventListener(card) {
    const deleteButton = card.querySelector('.grid-card__delete');
    deleteButton.addEventListener('click', () => {
        const cardItem = deleteButton.closest('.grid-card');
        cardItem.remove();
    });
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", escClosePopup);
    popup.removeEventListener('click', closePopupByClickOnOverLayOrButton);
}

function renderCard(card) {
    cardsContainer.prepend(card);
}

function createCard(title, link) {
    const card = cardTemplate.cloneNode(true);
    const gridCardTitle = card.querySelector('.grid-card__title');
    const gridCardImage = card.querySelector('.grid-card__image');

    gridCardTitle.textContent = title;
    gridCardImage.src = link;
    gridCardImage.alt = title;

    addDeleteCardEventListener(card);
    addLikeActiveListener(card);
    addEventOpenImageListener(card, title, link);

    return card;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", escClosePopup);
    popup.addEventListener('click', closePopupByClickOnOverLayOrButton);
    deletePopupErrors(validationConfig, popup);
}

function escClosePopup(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

for (const initialCard of initialCards) {
    const cardElement = createCard(initialCard.name, initialCard.link);
    renderCard(cardElement);
}

popupProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    userName.textContent = nameInputProfile.value;
    userAbout.textContent = jobInputProfile.value;
    closePopup(popupProfile);
});

editButton.addEventListener('click', () => {
    openPopup(popupProfile);
    nameInputProfile.value = userName.textContent;
    jobInputProfile.value = userAbout.textContent;

    deletePopupErrors(validationConfig, popupProfile);
});

popupCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardElement = createCard(titleCard.value, linkCard.value);
    renderCard(cardElement);

    closePopup(popupCard);
    evt.target.reset();
});

addButton.addEventListener('click', () => openPopup(popupCard));

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__user',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };

  enableValidation(validationConfig);
