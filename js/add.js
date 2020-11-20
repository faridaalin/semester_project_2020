import { BASE_URL, user, userToken } from "./utils/settings.js";
import { getFromLocal } from "./utils/storage.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import { login } from "./ui/login.js";
import { showMessage } from './helpers/showMessage.js';
import { removeMessage } from './helpers/removeMessage.js';
import { isImageUrlValid } from './helpers/isValidImageUrl.js';
import { deleteButton } from './components/deleteProduct.js';

login();
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


    const addNewProduct = async (url, token, obj) => {

        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }

        console.log(options);
        try {
            const res = await fetch(url, options);
            const product = await res.json();
            console.log(product);

            if(product.created_at) {
                const msg = `${obj.title} has been created`;
                showMessage('success', msg, '#msg')
            }

            form.reset();
        }
        catch (error) {
            console.log(error);
            const msg = `Something went wrong, please try again later`;
            showMessage('warning', msg)
        }
    }



    const handleNewproduct = (e) => {
        e.preventDefault();
        removeMessage('#msg');

        if (title.value.length === 0 || brand.value.length === 0 || price.value.length === 0 || description.value.length === 0 || imgUrl.value.length === 0) {
            const msg = "Not allowed with empty fields";
            showMessage('danger', msg, '#msg')
            return;
        } else if (imgUrl.value.length > 0 && !isImageUrlValid(imgUrl.value)) {
            const msg = "Image url is not valid";
            showMessage('danger', msg, '#msg')
            return;
        } else if (price.value.length > 0 && isNaN(price.value)) {
            const msg = "Price must be digit";
            showMessage('danger', msg, '#msg')
            return;
        } else {
            const productObject = {
                title: title.value,
                brand: brand.value,
                price: price.value,
                description: description.value,
                image_url: imgUrl.value,
                featured: featured.checked,
            }

            addNewProduct(URL, token, productObject)

        }



        console.log('End of function');
    }




    form.addEventListener('submit', handleNewproduct)
}

