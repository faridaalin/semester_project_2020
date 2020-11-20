import { BASE_URL, user, userToken } from "./utils/settings.js";
import { getFromLocal } from "./utils/storage.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import { login } from "./ui/login.js";
import { showMessage } from './helpers/showMessage.js';
import { isImageUrlValid } from './helpers/isValidImageUrl.js'

login();
renderNavbar();

const loggedUser = getFromLocal(user);
if (!loggedUser) location.href = "/";



if (loggedUser && loggedUser.role.type === "authenticated") {

    // Get the querystring
    const queryString = window.location.search;

    //Parse the querystring
    const urlParam = new URLSearchParams(queryString);
    const id = urlParam.get("id");

    const title = document.querySelector('#name');
    const brand = document.querySelector('#brand');
    const price = document.querySelector('#price');
    const description = document.querySelector('#description');
    const imgUrl = document.querySelector('#url');
    const productID = document.querySelector('#id');
    const featured = document.querySelector('#featured');


    (async () => {
        const URL = `${BASE_URL}/products/${id}`;

        try {
            const res = await fetch(URL);
            const product = await res.json();


            title.value = product.title
            brand.value = product.title
            price.value = product.price
            description.value = product.description
            imgUrl.value = product.image_url
            productID.value = product.id
            featured.checked = product.featured;



        }
        catch (error) {
            console.log(error);
        }
    }
    )();


    const updateProduct = async (obj) => {
        const URL = `${BASE_URL}/products/${obj.id}`;
      
        const token =  getFromLocal(userToken);
       
        const options = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }

        console.log(options);

        try {
            const res = await fetch(URL, options);
            const updatedProduct = await res.json();
            console.log(updatedProduct);
        }

        catch(error) {
            console.log(error);
        }
    }


    const form = document.querySelector('.edit-form');


    const handleFormEdit = (e) => {
        e.preventDefault();
     

        const inputs = document.querySelectorAll('.edit-form input');
        const inputsArr = [...inputs];

        inputsArr.forEach(input => {
            if (input.value.trim().length === 0) {

                return console.log("Empty fields are not allowed");

            }

            if(input.type === "price" && isNaN(input.value.trim())) {
                return console.log('not a number');
            }



            if (input.type === "url" && input.value.trim().length > 0 && !isImageUrlValid(input.value.trim())) {
                return console.log("invalid img url");

            }



        });
        const productObj = {
            title: title.value,
            brand: brand.value,
            price: price.value,
            description: description.value,
            image_url: imgUrl.value,
            id: productID.value,
            featured: featured.checked,
        };

        updateProduct(productObj);
    };

    form.addEventListener('submit', handleFormEdit);

};









