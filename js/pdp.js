import { BASE_URL } from "./utils/settings.js";
import { productDetail } from './components/productDetail.js'
import { renderNavbar } from "./elements/renderNavbar.js";
import {addToCart} from './helpers/addtoCart.js'

renderNavbar();

// Get the querystring
const queryString = window.location.search;

//Parse the querystring
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");



(async () => {
  const URL = `${BASE_URL}/products/${id}`;

  try {
    const res = await fetch(URL);
    const product = await res.json();
    productDetail(product)
    addToCart(product);

  }
  catch (error) {
    console.log(error);
  }

}
)();










