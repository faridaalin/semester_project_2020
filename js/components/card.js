import { favs } from '../utils/settings.js';
import { getFromLocal } from '../utils/storage.js';
import { getLoggedInUser } from '../helpers/getLoggedInUser.js';
import {getRoundNumber} from '../helpers/getRoundNumber.js'

export const card = (product) => {
  const currentFavs = getFromLocal(favs) ? getFromLocal(favs) : [];
  const price = getRoundNumber(product.price);

  const hasFavs = currentFavs.find(fav => {
    return parseInt(fav.id) === parseInt(product.id)
  });

  const cssClass = hasFavs ? "fa-heart" : "fa-heart-o";

  const user  = getLoggedInUser();
  const edit =
  user && user.username === "admin"
      ? ` <button type="button" class="btn btn-dark btn-sm edit-btn"><a href="/edit.html?id=${product.id}">Edit</a></button>`
      : "";
  const image = product.image_url ? product.image_url : `https://res.cloudinary.com/djey7uz4e/image/upload/v1606132924/noImage_plcdvu.jpg`;

  return ` <div class="product-top">
  ${edit}
  <a href="/pdp.html?id=${product.id}">
  <img class="card-img-top img-fluid" data-src="${image}" alt="${product.alt_text}">
    <div class="overlay btn-container d-flex justify-content-center align-items-center">
      <button type="button" class="content-btn btn btn-outline-primary">View</button>
    </div>
  </a>
</div>

<div class="product-bottom  pt-3">
  <a href="/pdp.html?id=${product.id}"><h3 class="card-title mb-0">${product.title}</h3></a>
  <div class="feature-info__price d-flex flex-row align-items-center justify-content-between">
    <h5 class=" card-text  mb-0">${price} NOK</h5>
    <i class="feature-icon fav fa ${cssClass}" data-id="${product.id}"></i>
  </div>
</div>`
}
