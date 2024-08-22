import { putLike, deleteLike, deleteMyCard } from "./api.js";

let currentCardId, currentDeleteButton;

// Функция создания карточки
export function createCard(
	item,
	cardTemplate,
	likeCard,
	deleteCard,
	getCardForDeletion,
	openImgPopup,
	profileId
) {
	const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
	const cardImage = cardElement.querySelector(".card__image");
	const cardTitle = cardElement.querySelector(".card__title");
	const deleteButton = cardElement.querySelector(".card__delete-button");
	const likeButton = cardElement.querySelector(".card__like-button");
	const likeCounter = cardElement.querySelector(".card__like-count");
	const cardId = item._id;
	cardImage.src = item.link;
	cardImage.alt = `Изображение места: ${item.name}`;
	cardTitle.textContent = item.name;
	likeCounter.textContent = item.likes.length;

	const isLiked = item.likes.some((like) => like._id === profileId);
	if (isLiked) {
		likeButton.classList.add("card__like-button_is-active");
	}

	likeButton.addEventListener("click", () => {
		likeCard(likeButton, likeCounter, cardId);
	});

	cardImage.addEventListener("click", openImgPopup);

	if (item.owner._id !== profileId) {
		deleteButton.classList.add("card__delete-button-unactive");
	} else {
		deleteButton.addEventListener("click", () => {
			currentCardId = cardId;
			currentDeleteButton = deleteButton;
		});
	}



	deleteButton.addEventListener("click", () => {
		deleteCard(getCardForDeletion());
	});

	return cardElement;
}

// Функция удаления карточки
export function deleteCard({ cardId, deleteButton }) {
	deleteMyCard(cardId)
	  .then(() => {
		const item = deleteButton.closest(".places__item");
		item.remove();
	  })
	  .catch((error) => {
		console.log(error);
	  });
  }
  export function getCardForDeletion() {
	return { cardId: currentCardId, deleteButton: currentDeleteButton };
  }

// Функция лайка карточки
export function likeCard(likeButton, likeCounter, cardId) {
	const likeMethod = likeButton.classList.contains(
		"card__like-button_is-active"
	)
		? deleteLike
		: putLike;
	likeMethod(cardId)
		.then((updatedCard) => {
			likeButton.classList.toggle("card__like-button_is-active");
			likeCounter.textContent = updatedCard.likes.length;
		})
		.catch((error) => {
			console.log(error);
		});
}

