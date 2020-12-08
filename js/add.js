import { BASE_URL, userToken } from "./utils/settings.js";
import { getFromLocal } from "./utils/storage.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import { removeMessage } from './helpers/removeMessage.js';
import { addNewProduct } from './ui/addProduct.js'
import { uploadFile } from './ui/uploadFile.js'
import { } from './ui/addProduct.js'
import { validateFields, removeValidationStyle } from './helpers/validateFields.js';
import { getLoggedInUser } from './helpers/getLoggedInUser.js';
import { fectData } from './helpers/fetcData.js';


renderNavbar();

const form = document.querySelector('#addForm');

const user = getLoggedInUser();

if (!user) location.href = "/";



if (user && user.username === "admin") {
    const URL = `${BASE_URL}/products`;
    const token = getFromLocal(userToken);

    const title = document.querySelector('#name');
    const brand = document.querySelector('#brand');
    const price = document.querySelector('#price');
    const description = document.querySelector('#description');
    const imgUrl = document.querySelector('#url');
    const altText = document.querySelector(".altText");
    const category = document.querySelector(".category");
    const featured = document.querySelector('#featured');

    const image_file = document.querySelector('#image_upload');
    const clear_file = document.querySelector('.clear');
    const previewContainer = document.querySelector('.preview');
    const previewImage = previewContainer.querySelector('.preview__image');
    const previewText = previewContainer.querySelector('.preview__text');
    let formData;

    image_file.addEventListener('change', () => {
        const currentFile = image_file.files[0];

        console.log(currentFile);

        if (!currentFile) {
            previewContainer.innerHTML = "No files selected for upload"
            //previewContainer.classList.add('error');
            previewImage.setAttribute('src', "")
            return;
        } else {
            const reader = new FileReader();
            previewText.style.display = "none";
            previewImage.style.display = "block";
            previewContainer.classList.remove('error');
            console.dir(currentFile);

            formData = new FormData();
            formData.append('files', image_file.files[0], image_file.files[0].name);
            console.log('formData', formData.getAll('files'));

            reader.readAsDataURL(currentFile)

            reader.addEventListener('load', () => {
                console.log(reader);
                previewImage.setAttribute('src', reader.result)
            })

            clear_file.addEventListener('click', () => {
                image_file.value = "";
                previewImage.setAttribute('src', "")
                previewImage.style.display = "none";
                previewText.style.display = "block";
            })
        }
    })





    const handleNewproduct = (e) => {
        e.preventDefault();
        removeMessage('#msg');


        const isValid = validateFields(".add-form .form-control");
        if (isValid === false || isValid === undefined) return;

        const productObject = {
            title: title.value,
            brand: brand.value,
            price: price.value,
            description: description.value,
            image_url: imgUrl.value,
            alt_text: altText.value,
            category: category.value,
            featured: featured.checked,
        }


        const upload_file_url = `${BASE_URL}/upload`;
        //addNewProduct(URL, token, productObject);
        uploadFile(upload_file_url, token, formData);


        console.log('formData 107', formData.getAll('files'));



        //removeValidationStyle(".add-form .form-control")
        //form.reset();

    }

    form.addEventListener('submit', handleNewproduct)
}

