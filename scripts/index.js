const cardsContainer = document.querySelector('.places__list');

function createCard(item, handleDelete) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const deleteButton = cardItem.querySelector('.card__delete-button');
    cardImage.src=item.link;
    cardImage.alt=`Изображение места: ${item.name}`;
    cardTitle.textContent=item.name;
    deleteButton.addEventListener('click', handleDelete);

    return cardItem;
};

function deleteCard(event) {
    const item = event.target.closest('.places__item');
    item.remove();      
}

function createGallery(data){
    data.forEach(item => {
        const element = createCard(item, deleteCard);
        cardsContainer.append(element);
    });
}

createGallery(initialCards)


