import { getFromSessionStorage } from './utils/storage.js';
import { allProducts } from './utils/settings.js';
import renderAllProducts from "./elements/renderAllProducts.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import {showNavbarBgOnScroll} from './ui/showNavbarBgOnScroll.js';

showNavbarBgOnScroll();
renderNavbar();

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const category = urlParam.get("category");


const header = document.querySelector('.header').innerHTML = category;
document.title = category;
const breadcrumb = document.querySelector('.breadcrumb');
breadcrumb.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${category}</li>`;


const currentProducts = getFromSessionStorage(allProducts);
console.log(currentProducts);
let categoryToDisplay;

categoryToDisplay = currentProducts.filter((product) => {

    return product.category.toLowerCase() === category.toLowerCase();

})
console.log(categoryToDisplay);
renderAllProducts(categoryToDisplay, "No categories available currently", ".category-container");

