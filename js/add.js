import { BASE_URL, user, userToken } from "./utils/settings.js";
import { getFromLocal } from "./utils/storage.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import { removeMessage } from './helpers/removeMessage.js';
import {addNewProduct} from './ui/addProduct.js'
import {} from './ui/addProduct.js'
import {validateFields, removeValidationStyle} from './helpers/validateFields.js'


renderNavbar()

const form = document.querySelector('#addForm');

const loggedUser = getFromLocal(user);
if (!loggedUser) location.href = "/";

if (loggedUser && loggedUser.role.type === "authenticated") {
    const URL = `${BASE_URL}/products`;
    const token = getFromLocal(userToken);

    const title = document.querySelector('#name');
    const brand = document.querySelector('#brand');
    const price = document.querySelector('#price');
    const description = document.querySelector('#description');
    const imgUrl = document.querySelector('#url');
    const featured = document.querySelector('#featured');

    const handleNewproduct = (e) => {
        e.preventDefault();
        removeMessage('#msg');
        console.log('Detected click');

        const isValid = validateFields(".add-form .form-control");
        if (isValid === false || isValid === undefined){
          return;
        }
     

            const productObject = {
                title: title.value,
                brand: brand.value,
                price: price.value,
                description: description.value,
                image_url: imgUrl.value,
                featured: featured.checked,
            }

        addNewProduct(URL, token, productObject);
        removeValidationStyle(".add-form .form-control")
        form.reset();

    }

    form.addEventListener('submit', handleNewproduct)
}

