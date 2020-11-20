import { showMessage } from "../helpers/showMessage.js";
import { isImageUrlValid } from "../helpers/isValidImageUrl.js";

export const validateFields = (tag) => {
    const inputs = document.querySelectorAll(tag);

    const inputsArr = [...inputs];

    let isValid = true;

    for (let i = 0; i < inputsArr.length; i++) {
        if (
            inputsArr[i].value.length === undefined ||
            inputsArr[i].value.length === 0
        ) {
            inputsArr[i].classList.add("is-invalid");
            isValid = false;

        } else if (inputsArr[i].type === "url") {
            if (
                inputsArr[i].value.length > 0 &&
                !isImageUrlValid(inputsArr[i].value)
            ) {
                const imgFeedback = (document.querySelector(
                    ".img-feedback"
                ).innerHTML = "Invalid url");
                inputsArr[i].classList.add("is-invalid");
                isValid = false;
            } else {
                const imgFeedback = (document.querySelector(
                    ".img-feedback"
                ).innerHTML = "");
                inputsArr[i].classList.remove("is-invalid");
                inputsArr[i].classList.add("is-valid");
            }
        } else if (inputsArr[i].name === "price") {
            if (isNaN(inputsArr[i].value)) {
                const priceFeedback = (document.querySelector(
                    ".price-feedback"
                ).innerHTML = "Price must a digit");
                inputsArr[i].classList.add("is-invalid");
                isValid = false;
            } else {
                const priceFeedback = (document.querySelector(
                    ".price-feedback"
                ).innerHTML = "");

                inputsArr[i].classList.remove("is-invalid");
                inputsArr[i].classList.add("is-valid");
            }
        } else {
            inputsArr[i].classList.remove("is-invalid");
            inputsArr[i].classList.add("is-valid");
        }
    }

    if (!isValid) {
        const msg = "Missing values";
        showMessage("danger", msg, "#msg");
        return;
    }
    return isValid;
};