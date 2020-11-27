import { user, favs} from '../utils/settings.js';
import { getFromLocal } from '../utils/storage.js';

export const productCard = (product) => {

  const currentFavs = getFromLocal(favs) ? getFromLocal(favs) : [];
    
  const hasFavs = currentFavs.find(fav => {
      return parseInt(fav.id) === parseInt(product.id)
    });

    const cssClass = hasFavs ? "fa-heart" : "fa-heart-o";


  const loggedInUser = getFromLocal(user);
  const edit =
  loggedInUser && loggedInUser.username === "admin"
      ? ` <button type="button" class="btn btn-info btn-sm edit-btn"><a href="/edit.html?id=${product.id}">Edit</a></button>`
      : "";

      const image = product.image_url ?  product.image_url :`https://res.cloudinary.com/djey7uz4e/image/upload/v1606132924/noImage_plcdvu.jpg`;


    return ` <div class="product-card col-sm-6 col-md-3 mb-5 pb-5 pt-3">
    <div class="product-top">
      ${edit}
      <a href="/pdp.html?id=${product.id}"> <img src="${image}" class="card-img-top img-fluid" alt="${product.alt_text}">
        <div class="overlay btn-container d-flex justify-content-center align-items-center">
          <button type="button" class="content-btn btn btn-outline-primary">View</button>
        </div>
      </a>
    </div>
    
    <div class="product-bottom  pt-3">
      <a href="/pdp.html?id=${product.id}"><h3 class="card-title mb-0">${product.title}</h3></a>
      <div class="feature-info__price d-flex flex-row align-items-center justify-content-between">
        <h5 class=" card-text  mb-0">NOK ${product.price}</h5>
        <i class="feature-icon fav fa ${cssClass}" data-id="${product.id}"></i>
      </div>
    </div>
    </div> `;
};