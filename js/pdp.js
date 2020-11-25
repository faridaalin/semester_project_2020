import { BASE_URL } from "./utils/settings.js";
import { productDetail } from './components/productDetail.js'
import { renderNavbar } from "./elements/renderNavbar.js";
import {addToCart} from './helpers/addtoCart.js'
import {spinner} from './elements/spinner.js';

renderNavbar();

// Get the querystring
const queryString = window.location.search;

//Parse the querystring
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");



( () => {
  spinner('.pdp-detail-container');      


    const URL = `${BASE_URL}/products/${id}`;

    try {
      const res = await fetch(URL);
      const product = await res.json();
      if(product) {
        spinner('.pdp-detail-container div', "d-none");    
        productDetail(product)
        addToCart(product);
      }
 
  
    }
    catch (error) {
      console.log(error);
    }
    



}
)();










