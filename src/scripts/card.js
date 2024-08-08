// Функция создания карточки
export function createCard(item, handleDelete, handleLike, openImgPopup) {
	const cardTemplate = document.querySelector("#card-template").content;
	const cardItem = cardTemplate.querySelector(".places__item").cloneNode(true);
	const cardImage = cardItem.querySelector(".card__image");
	const cardTitle = cardItem.querySelector(".card__title");
	const deleteButton = cardItem.querySelector(".card__delete-button");
	const likeButton = cardItem.querySelector(".card__like-button");
	cardImage.src = item.link;
	cardImage.alt = `Изображение места: ${item.name}`;
	cardTitle.textContent = item.name;
	deleteButton.addEventListener("click", handleDelete);
	likeButton.addEventListener("click", handleLike);
	cardImage.addEventListener("click", openImgPopup);

	return cardItem;
}

// Функция удаления карточки
export function deleteCard(evt) {
	const item = evt.target.closest(".places__item");
	item.remove();
}

// Функция лайка карточки
export function likeCard(evt) {
	const item = evt.target.closest(".card__like-button");
	item.classList.toggle("card__like-button_is-active");
}
