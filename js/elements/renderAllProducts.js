import { productCard } from "../components/productCard.js";
import {showMessage} from '../helpers/showMessage.js';
import { removeMessage} from '../helpers/removeMessage.js';




const renderAllProducts = (products, msg) => {

  const container = document.querySelector(".shop-container");
  container.innerHTML = "";
  removeMessage( "#pdpMsg")

  if(msg) {
    return showMessage("info", msg, "#pdpMsg");     
  }
  products.map(product => container.innerHTML += productCard(product));
};

export default renderAllProducts;
