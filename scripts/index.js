// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list');

function createCard(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardItem.querySelector('.card__image').src=item.link;
    cardItem.querySelector('.card__image').alt=`Изображение места: ${item.name}`;
    cardItem.querySelector('.card__title').textContent=item.name;
    cardItem.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    cardsContainer.append(cardItem)
};

function deleteCard(event) {
    const item = event.target.closest('.places__item');
    item.remove();      
}

function createGallery(data){
    data.forEach(item => {
        createCard(item);
    });
}

createGallery(initialCards)


