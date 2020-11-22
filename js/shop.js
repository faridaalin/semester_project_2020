import { BASE_URL } from "./utils/settings.js";
import renderAllProducts from './elements/renderAllProducts.js'
import { renderNavbar } from "./elements/renderNavbar.js";

renderNavbar();

(async () => {
    const URL = `${BASE_URL}/products`;

    try {
        const res = await fetch(URL); 
        const products = await res.json();

        renderAllProducts(products); 

    }

    catch(error) {
        console.log(error);
    }

})()