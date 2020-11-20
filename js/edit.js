import { BASE_URL, user, userToken } from "./utils/settings.js";
import { getFromLocal } from "./utils/storage.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import { login } from "./ui/login.js";
import { showMessage } from "./helpers/showMessage.js";
import {validateFields} from './helpers/validateFields.js';
import { deleteProduct } from "./components/deleteProduct.js";
import { updateProduct } from "./ui/updateProduct.js";
import { removeMessage } from "./helpers/removeMessage.js";

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

  const title = document.querySelector("#name");
  const brand = document.querySelector("#brand");
  const price = document.querySelector("#price");
  const description = document.querySelector("#description");
  const imgUrl = document.querySelector("#url");
  const productID = document.querySelector("#id");
  const featured = document.querySelector("#featured");

  const URL = `${BASE_URL}/products/${id}`;
  const token = getFromLocal(userToken);

  (async () => {
    try {
      const res = await fetch(URL);
      const product = await res.json();

      title.value = product.title;
      brand.value = product.title;
      price.value = product.price;
      description.value = product.description;
      imgUrl.value = product.image_url;
      productID.value = product.id;
      featured.checked = product.featured;
      
    } catch (error) {
      console.log(error);
      const msg = "Something went wrong, please try again later.";
      showMessage("warning", msg, "#msg");
    }
  })();


  const form = document.querySelector(".edit-form");

  const handleFormEdit = (e) => {
    e.preventDefault();
    removeMessage("#msg");

    const isValid = validateFields(".edit-form .form-control");
    if (isValid === false || isValid === undefined){
      return;
    }

    const productObj = {
      title: title.value,
      brand: brand.value,
      price: price.value,
      description: description.value,
      image_url: imgUrl.value,
      id: productID.value,
      featured: featured.checked,
    };

    updateProduct(productObj, URL, token);
   
  };
  deleteProduct(URL, token);



  form.addEventListener("submit", handleFormEdit);

}
