import { BASE_URL, user, userToken } from "../utils/settings.js";
import { getFromLocal } from '../utils/storage.js';
import { updateProduct } from "../ui/updateProduct.js";
import { validateFields} from '../helpers/validateFields.js';

const loggedInUser = getFromLocal(user);


export const editBackgroundImg = (e) => {

    const token = getFromLocal(userToken);
    const URL = `${BASE_URL}/home`;
  

    const formButton = document.querySelector("#edit-bg");
    const altText = document.querySelector(".altText");
    const imgUrl = document.querySelector(".img-url");
   

    const handleBgChange = (e) => {
        e.preventDefault();

        const isValid = validateFields("#editBg-form .form-control");
        if (isValid === false || isValid === undefined) {
            return;
        }

        console.log(altText.value);
        console.log(imgUrl.value);

        const productObj = {
            hero_banner_alt_text: altText.value,
            hero_url: imgUrl.value,
        };

        updateProduct(productObj, URL, token);

    };

    formButton.addEventListener('click', handleBgChange);

}


const renderHeroBanner = (url) => {
    const herobanner = document.querySelector('.herobanner');
    const herobannerContent = document.querySelector('.herobanner__content');
    console.log(herobannerContent);

    herobanner.style.backgroundImage = `url(${url})`;


    const edit =
        loggedInUser && loggedInUser.username === "admin"
            ? ` <button type="button" class="btn btn-info btn-sm edit-btn edit-bg" data-toggle="modal" data-target="#herobannerBg">Edit background image</button>`
            : "";

    herobannerContent.innerHTML += edit;





}

export default renderHeroBanner;
