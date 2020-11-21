import { BASE_URL } from "./utils/settings.js";
import { cart } from './utils/settings.js';
import { saveToLocal, getFromLocal } from './utils/storage.js';
import { productDetail } from './components/productDetail.js'
import { renderNavbar } from "./elements/renderNavbar.js";
import { login } from "./ui/login.js";


login();
renderNavbar();

// Get the querystring
const queryString = window.location.search;

//Parse the querystring
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");


function addToCartHandler(product) {
  const addToCartBtn = document.querySelector('#addToCart');

  let localCart = getFromLocal(cart);

  if(!localCart)  localCart = [];

  addToCartBtn.addEventListener('click', function (e) {
    const item = localCart.find((item) => item.product.id === product.id);
   

    if (item) {
      item.qty += 1;
    } else {
      localCart.push({
        size: 0,
        qty: 1,
        product: product,
      })
    }

    saveToLocal(cart, localCart)

  });
}



(async () => {
  const URL = `${BASE_URL}/products/${id}`;

  try {
    const res = await fetch(URL);
    const product = await res.json();
    productDetail(product)
    addToCartHandler(product)

  }
  catch (error) {
    console.log(error);
  }



}
)();










