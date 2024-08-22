// Настрйки валидации
export const validationConfig = {
	formSelector: ".popup__form",
	inputSelector: ".popup__input",
	submitButtonSelector: ".popup__button",
	inactiveButtonClass: "popup__button_disabled",
	inputErrorClass: "popup__input_type_error",
	errorClass: "popup__error_visible",
  };
  
//   Вывод ошибки валидации
  const showInputError = (
	formElement,
	inputElement,
	errorMessage,
	inputErrorClass,
	errorClass
  ) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(errorClass);
  };
  
//   Скрытие сообщения об ошибке
  const hideInputError = (
	formElement,
	inputElement,
	inputErrorClass,
	errorClass
  ) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(inputErrorClass);
	errorElement.classList.remove(errorClass);
	errorElement.textContent = "";
  };
  
//   Проверка валидности поля
  const checkInputValidity = (
	formElement,
	inputElement,
	inputErrorClass,
	errorClass
  ) => {
	if (inputElement.validity.patternMismatch) {
	  	inputElement.setCustomValidity(inputElement.dataset.errorPattern);
	} else if (inputElement.validity.valueMissing) {
		inputElement.setCustomValidity(inputElement.dataset.errorEmpty);
	} else if (inputElement.validity.typeMismatch) {
		inputElement.setCustomValidity(inputElement.dataset.errorType);
	} else {
	  inputElement.setCustomValidity("");
	}
  
	if (!inputElement.validity.valid) {
	  showInputError(
		formElement,
		inputElement,
		inputElement.validationMessage,
		inputErrorClass,
		errorClass
	  );
	} else {
	  hideInputError(formElement, inputElement, inputErrorClass, errorClass);
	}
  };
  
//   Добавление обработчиков 
  const setEventListeners = (
	formElement,
	inputSelector,
	inputErrorClass,
	errorClass,
	submitButtonSelector,
	inactiveButtonClass
  ) => {
	const inputList = Array.from(formElement.querySelectorAll(inputSelector));
	const buttonElement = formElement.querySelector(submitButtonSelector);
  
	toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  
	inputList.forEach((inputElement) => {
	  inputElement.addEventListener("input", function () {
		checkInputValidity(
		  formElement,
		  inputElement,
		  inputErrorClass,
		  errorClass
		);
  
		toggleButtonState(inputList, buttonElement, inactiveButtonClass);
	  });
	});
  };
  
//   Включение валидации
  export const enableValidation = (validationConfig) => {
	const formList = Array.from(
	  document.querySelectorAll(validationConfig.formSelector)
	);
	formList.forEach((formElement) => {
	  formElement.addEventListener("submit", (evt) => {
		evt.preventDefault();
	  });
	  setEventListeners(
		formElement,
		validationConfig.inputSelector,
		validationConfig.inputErrorClass,
		validationConfig.errorClass,
		validationConfig.submitButtonSelector,
		validationConfig.inactiveButtonClass
	  );
	});
  };
  
//   Проверка на невалидность
  const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
	  return !inputElement.validity.valid;
	});
  };
  
//   Функция деактивации кнопки
  const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
	buttonElement.disabled = true;
	buttonElement.classList.add(inactiveButtonClass);
  };
  
//   Функция изменения состояния кнопки
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
	if (hasInvalidInput(inputList)) {
	  disableSubmitButton(buttonElement, inactiveButtonClass);
	} else {
	  buttonElement.disabled = false;
	  buttonElement.classList.remove(inactiveButtonClass);
	}
  };
  
//   Очистка сообщений валидации
  export const clearValidation = (formElement, validationConfig) => {
	const inputList = Array.from(
	  formElement.querySelectorAll(validationConfig.inputSelector)
	);
	const buttonElement = formElement.querySelector(
	  validationConfig.submitButtonSelector
	);
	disableSubmitButton(buttonElement, validationConfig.inactiveButtonClass);
	inputList.forEach((inputElement) => {
	  hideInputError(
		formElement,
		inputElement,
		validationConfig.inputErrorClass,
		validationConfig.errorClass
	  );
	  inputElement.setCustomValidity("");
	});
  };