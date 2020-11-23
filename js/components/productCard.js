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
    loggedInUser && loggedInUser.role.type === "authenticated"
      ? ` <button type="button" class="btn btn-info btn-sm edit-btn"><a href="/edit.html?id=${product.id}">Edit</a></button>`
      : "";



    return ` <div class="col-sm-6 col-md-3 mb-5 pb-5">
    <div class="product-top">
      ${edit}
      <a href="/pdp.html?id=${product.id}">  <img src="${product.image_url}" class="card-img-top img-fluid" alt="${product.title}">
        <div class="overlay btn-container d-flex justify-content-center align-items-center">
          <button type="button" class="content-btn btn btn-outline-primary">View</button>
        </div>
      </a>
    
    </div>
    
    <div class="product-bottom  pt-3">
      <a href="/pdp.html?id=${product.id}"><h3 class="card-title mb-0">${product.title}</h3></a>
      <div class="feature-info__price d-flex flex-row align-items-center justify-content-between">
      <p class="description">${product.description}</p>
        <h5 class=" card-text  mb-0">NOK ${product.price}</h5>
        <i class="fav fa ${cssClass}" data-id="${product.id}"></i>
      </div>
    </div>
    </div> `
}