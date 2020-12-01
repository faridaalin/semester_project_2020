import renderAllProducts  from "../elements/renderAllProducts.js";
import {featuredCard} from '../components/featuredCard.js';
import {saveFavourites} from './renderAllProducts.js';
import { logout } from "../ui/logout.js";
import { getFromLocal } from "../utils/storage.js";
import { favs } from "../utils/settings.js";


const slideFeaturedImages = () => {
  let slidesContainer = document.querySelector('.custom-carousel_slide-container');
const slides = [...slidesContainer.children];
const leftButton = document.querySelector('.custom-carousel__button--left') ;
const rightButton = document.querySelector('.custom-carousel__button--right');
let slideSizeWidth = slides[0].getBoundingClientRect().width;


const moveOneSlideLeft = (e) => {
  slidesContainer.scrollLeft -= slideSizeWidth
}
const moveOneSlideRight = (e) => {
  slidesContainer.scrollLeft += slideSizeWidth
}

leftButton.addEventListener('click', moveOneSlideLeft);
rightButton.addEventListener('click', moveOneSlideRight);


}


const displayFeaturedProducts = (featuredPropducts) => {
  const container = document.querySelector('.featured-container');
  const currentFavs = getFromLocal(favs) ? getFromLocal(favs) : [];


  const getFavsItem = (currentFavs, product) => {
   currentFavs.find(fav => {
      return parseInt(fav.id) === parseInt(product.id)
    });
  };
 

  container.innerHTML = `<div class="custom-carousel"">
  <button class="custom-carousel__button custom-carousel__button--left" aria-label="left button"><i class="fa fa-chevron-left"></i></button>
  <ul class="custom-carousel_slide-container">
    ${featuredPropducts.map(product => {
        return `<li class="custom-carousel__slide ">

      <div class="product-card">
        <div class="product-top">
          <a href="/pdp.html?id=${product.id}"> <img class="card-img-top img-fluid" src="${product.image_url}" alt="${product.alt_text}">
            <div class="overlay btn-container d-flex justify-content-center align-items-center">
              <button type="button" class="content-btn btn btn-outline-primary">View</button>
            </div>
          </a>
        </div>
        
        <div class="product-bottom  pt-3">
          <a href="/pdp.html?id=${product.id}"><h3 class="card-title mb-0">${product.title}</h3></a>
          <div class="feature-info__price d-flex flex-row align-items-center justify-content-between">
            <h5 class=" card-text  mb-0">${product.price} NOK</h5>
            <i class="feature-icon fav fa ${getFavsItem(currentFavs, product) ? "fa-heart" : "fa-heart-o"}" data-id="${product.id}"></i>
          </div>
        </div>
        </div>
    </li>`
    }).join("")}


  </ul>   
  <button class="custom-carousel__button custom-carousel__button--right" aria-label="right button"><i class="fa fa-chevron-right"></i></button>
</div>`



slideFeaturedImages();
saveFavourites();

 
};


const renderFeatured = (products) => {
  const featuredPropducts = products.filter(product => product.featured);


  if(featuredPropducts.length !== 0) {
    displayFeaturedProducts(featuredPropducts);
  } else {
    document.querySelector('.featured-title').textContent = "";
    document.querySelector('.carousel-featured').innerHTML = "";
  }
 
};

export default renderFeatured;




