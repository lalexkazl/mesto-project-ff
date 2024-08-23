import "./pages/index.css";
import { createCard, likeCard, deleteCard, getCardForDeletion } from "./scripts/card.js";
import {
	editProfile,
	postNewCard,
	updateNewAvatar,
	getInitialInfo,
} from "./scripts/api.js";
import { openModal, closeModal } from "./scripts/modal.js";
import {
	enableValidation,
	clearValidation,
	validationConfig,
} from "./scripts/validation";

const cardsContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

const addCardPopup = document.querySelector(".popup_type_new-card");
const openAddButton = document.querySelector(".profile__add-button");
const closeAddButton = addCardPopup.querySelector(".popup__close");
const addForm = document.querySelector('form[name="new-place"]');
const cardInput = addForm.querySelector(".popup__input_type_card-name");
const linkInput = addForm.querySelector(".popup__input_type_url");
const addSaveButton = addCardPopup.querySelector(".popup__button");

const editPopup = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = editPopup.querySelector(".popup__close");
const editForm = document.querySelector('form[name="edit-profile"]');
const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editSaveButton = editPopup.querySelector(".popup__button");


const imgPopup = document.querySelector(".popup_type_image");
const closePhotoButton = imgPopup.querySelector(".popup__close");
const zoomedPopupImage = imgPopup.querySelector(".popup__image");
const imgPopupCaption = imgPopup.querySelector(".popup__caption");

// Функция добавления новых карточек
function addCard(
	card,
	cardsContainer,
	cardTemplate,
	createCard,
	likeCard,
	deleteCard,
	getCardForDeletion,
	openImgPopup,
	profileId
) {
	const cardElement = createCard(
		card,
		cardTemplate,
		likeCard,
		deleteCard,
		getCardForDeletion,
		openImgPopup,
		profileId
	);
	cardsContainer.append(cardElement);
}

// Функция вовода карточек из списка на стартовую страницу
function createGallery(initialCards, profileId) {
	initialCards.forEach((card) => {
		addCard(
			card,
			cardsContainer,
			cardTemplate,
			createCard,
			likeCard,
			deleteCard,
			getCardForDeletion,
			openImgPopup,
			profileId
		);
	});
}

function handleAddForm(evt) {
	evt.preventDefault();
	const cardValue = cardInput.value;
	const linkValue = linkInput.value;
	showLoadingBtn(true, addForm.querySelector(".popup__button"));
	addSaveButton.disabled = true;
	postNewCard(cardValue, linkValue)
		.then((card) => {
			const newCard = createCard(
				card,
				cardTemplate,
				likeCard,
				deleteCard,
				getCardForDeletion,
				openImgPopup,
				profileId
			);
			cardsContainer.prepend(newCard);
			closeModal(addCardPopup);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			addForm.reset();
			showLoadingBtn(false, addForm.querySelector(".popup__button"));
		});
}

addForm.addEventListener("submit", handleAddForm);

// Функция изменения текста во время сохранения
const showLoadingBtn = (isLoading, button) => {
	button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

// Popup добавления карточек
openAddButton.addEventListener("click", () => {
	openModal(addCardPopup);
	clearValidation(addForm, validationConfig);
});

closeAddButton.addEventListener("click", () => {
	closeModal(addCardPopup);
});

// Popup редактирования профиля
profileEditButton.addEventListener("click", () => {
	openModal(editPopup);
	fillPopupEditInputs();
	clearValidation(editForm, validationConfig);
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
	const nameValue = nameInput.value;
	const jobValue = jobInput.value;
	showLoadingBtn(true, editPopup.querySelector(".popup__button"));
	editSaveButton.disabled = true;
	editProfile(nameValue, jobValue)
		.then((res) => {
			profileTitle.textContent = res.name;
			profileDescription.textContent = res.about;
			closeModal(editPopup);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			showLoadingBtn(false, editPopup.querySelector(".popup__button"));
		});
}

editForm.addEventListener("submit", handleFormSubmit);

// Popup увеличения карточек
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

// Popup редактирования аватара
const profileImageButton = document.querySelector(".profile__image_cover");
const profileImage = document.querySelector(".profile__image");
const profilePopup = document.querySelector(".popup_type_avatar");
const closeProfileButton = profilePopup.querySelector(".popup__close");
const profileForm = document.forms["avatar_edit"];
const profileLinkInput = profileForm.querySelector(".popup__input_type_url");
const profileSaveButton = profilePopup.querySelector(".popup__button");

profileImageButton.addEventListener("click", () => {
	openModal(profilePopup);
	profileForm.reset();
	clearValidation(profileForm, validationConfig);
});

closeProfileButton.addEventListener("click", () => {
	closeModal(profilePopup);
});

// Функция смены аватара
function handleProfileForm(evt) {
	evt.preventDefault();
	const linkValue = profileLinkInput.value;
	profileImage.style.backgroundImage = linkValue;
	showLoadingBtn(true, profilePopup.querySelector(".popup__button"));
	profileSaveButton.disabled = true;
	updateNewAvatar(linkValue)
		.then((res) => {
			profileImage.style.backgroundImage = `url('${res.avatar}')`;
			closeModal(profilePopup);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			profileForm.reset();
			showLoadingBtn(false, profileForm.querySelector(".popup__button"));
		});
}

profileForm.addEventListener("submit", handleProfileForm);

// Валидация
enableValidation(validationConfig);

// Вызов функции отрисовки стартовой страницы
let profileId;

getInitialInfo()
	.then((array) => {
		const [userList, initialCards] = array;
		profileTitle.textContent = userList.name;
		profileDescription.textContent = userList.about;
		profileId = userList._id;
		profileImage.style.backgroundImage = `url(${userList.avatar})`;
		createGallery(initialCards, profileId);
	})
	.catch((error) => {
		console.log(error);
	});
