import { BASE_URL } from "./utils/settings.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import { login } from "./ui/login.js";

login();
renderNavbar();

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
    // Get all fields

    try {
        const res = await fetch(URL);
        const product = await res.json();

        console.log(product);

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

const form = document.querySelectorAll('.edit-form');
const submit = document.querySelector('.product-edit');

submit.addEventListener('click', (e) => {
e.preventDefault()

const formData = new FormData(form[0]);

console.log('FormData', formData.get('price'));
console.log('clicked');
})

console.log(submit);




