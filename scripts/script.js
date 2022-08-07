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

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__occupation');
const profilePopup = document.querySelector('.popup_type_profile-edit');
const personPopup = document.querySelector('.popup_type_new-person');
const popupFormEdit = profilePopup.querySelector('.popup__form');
const popupAddPerson = personPopup.querySelector('.popup__form');

const inputName = popupFormEdit.querySelector('.popup__input_type_name');
const inputAbout = popupFormEdit.querySelector('.popup__input_type_about');

const gridSection = document.querySelector('.elements');
const gridElement = gridSection.querySelector('#cards').content;
const imagePopup = document.querySelector('.popup_type_card');

const personName = popupAddPerson.querySelector('.popup__input_type_person');
const personLink = popupAddPerson.querySelector('.popup__input_type_image-link');

const imageBig = imagePopup.querySelector('.popup-card__image');
const imageDescription = imagePopup.querySelector('.popup-card__description');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popupCloseButtonProfile = profilePopup.querySelector('.popup__close-button');
const popupCloseButtonPerson = personPopup.querySelector('.popup__close-button');
const popupCloseButtonCard = imagePopup.querySelector('.popup__close-button');


function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};


function formSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(profilePopup);
    }

function createCard(name, link) {
    const card = gridElement.cloneNode(true);
    const cardCaption = card.querySelector('.card__caption');
    const cardImage = card.querySelector('.card__image');
    const likeButton = card.querySelector('.card__like-button');
    const deleteButton = card.querySelector('.card__delete-button');
    const cardName = card.querySelector('.card__name')
    cardName.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    
    likeButton.addEventListener('click', function(evt){
        evt.target.classList.toggle('card__like-button_active');
    });

    deleteButton.addEventListener('click', function(evt){
       const cardDelete = evt.target.closest('.card');
       cardDelete.remove();
    });

    cardImage.addEventListener('click', function(evt) {
        openPopup(imagePopup);
        imageBig.src = cardImage.src;
        imageBig.alt = cardCaption.textContent;
        imageDescription.textContent = cardCaption.textContent;
    });

    return card;
};

function addCard(card) {
    gridSection.prepend(card);
};

function addCardForm(evt) {
    evt.preventDefault();
    const name = personName.value;
    const link = personLink.value;
    addCard(createCard(name, link));
    popupAddPerson.reset();
    closePopup(personPopup);
};

profileEditButton.addEventListener('click', function(){
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    openPopup(profilePopup);
});

popupCloseButtonProfile.addEventListener('click', function(){
    closePopup(profilePopup);
});

popupFormEdit.addEventListener('submit', formSubmitProfile);

profileAddButton.addEventListener('click', function(){
    openPopup(personPopup);
});

initialCards.forEach((item) => {
    const newCard = createCard(item.name, item.link);
    addCard(newCard);
});

popupCloseButtonPerson.addEventListener('click', function(){
    closePopup(personPopup);
});

popupAddPerson.addEventListener('submit', addCardForm);

popupCloseButtonCard.addEventListener('click', function(){
    closePopup(imagePopup);
});


