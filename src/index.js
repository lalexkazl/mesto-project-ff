import "./pages/index.css";
import {
	initialCards,
	createCard,
	deleteCard,
	likeCard,
} from "./scripts/card.js";
import { openModal, closeModal } from "./scripts/modal.js";

const cardsContainer = document.querySelector(".places__list");

// Функция вовода карточек из списка на стартовую страницу
function createGallery(data) {
	data.forEach((item) => {
		const element = createCard(item, deleteCard, likeCard, openImgPopup);
		cardsContainer.append(element);
	});
}

createGallery(initialCards);

// Popup добавления карточек
const addCardPopup = document.querySelector(".popup_type_new-card");
const openAddButton = document.querySelector(".profile__add-button");
const closeAddButton = addCardPopup.querySelector(".popup__close");
const addForm = document.querySelector('form[name="new-place"]');
const cardInput = addForm.querySelector(".popup__input_type_card-name");
const linkInput = addForm.querySelector(".popup__input_type_url");

openAddButton.addEventListener("click", () => {
	openModal(addCardPopup);
});

closeAddButton.addEventListener("click", () => {
	closeModal(addCardPopup);
});

// Функция добавления новых карточек
function addCard(evt) {
	evt.preventDefault();
	const newItem = {
		name: cardInput.value,
		link: linkInput.value,
	};
	const newCard = createCard(newItem, deleteCard, likeCard, openImgPopup);
	cardsContainer.prepend(newCard);
	closeModal(addCardPopup);
	addForm.reset();
}

addForm.addEventListener("submit", addCard);

// Popup редактирования профиля
const editPopup = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = editPopup.querySelector(".popup__close");
const editForm = document.querySelector('form[name="edit-profile"]');
const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

profileEditButton.addEventListener("click", () => {
	openModal(editPopup);
	fillPopupEditInputs();
});

closeEditButton.addEventListener("click", () => {
	closeModal(editPopup);
});

// Функция заполнения инпутов профиля по умолчанию
function fillPopupEditInputs() {
	nameInput.value = profileTitle.textContent;
	jobInput.value = profileDescription.textContent;
}
//Функция изменения значений профиля
function handleFormSubmit(evt) {
	evt.preventDefault();
	profileTitle.textContent = nameInput.value;
	profileDescription.textContent = jobInput.value;
	closeModal(editPopup);
}

editForm.addEventListener("submit", handleFormSubmit);

// Popup увеличения карточек
const imgPopup = document.querySelector(".popup_type_image");
const closePhotoButton = imgPopup.querySelector(".popup__close");
const zoomedPopupImage = imgPopup.querySelector(".popup__image");
const imgPopupCaption = imgPopup.querySelector(".popup__caption");

closePhotoButton.addEventListener("click", () => {
	closeModal(imgPopup);
});

// Функция показа Popup увеличения картинок
function openImgPopup(evt) {
	openModal(imgPopup);
	const itemName = evt.target
		.closest(".places__item")
		.querySelector(".card__title");
	zoomedPopupImage.setAttribute("src", evt.target.src);
	zoomedPopupImage.setAttribute("alt", evt.target.alt);
	imgPopupCaption.textContent = itemName.textContent;

	console.log(itemName);
}
