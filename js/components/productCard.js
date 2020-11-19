import { user} from '../utils/settings.js';
import { getFromLocal } from '../utils/storage.js';

const loggedInUser = getFromLocal(user);
const editBtn = loggedInUser && loggedInUser.role.type === "authenticated" ? ` <button type="button" class="btn btn-info btn-sm edit-btn"><a href="/edit.html">Edit</a></button>` : "";

export const productCard = (product) => {
    return ` <div class="col-sm-6 col-md-3 mb-5 pb-5">
    <div class="product-top">
      ${editBtn}
      <a href="/pdp.html?id=${product.id}">  <img src="${product.image_url}" class="card-img-top img-fluid" alt="${product.title}">
        <div class="overlay btn-container d-flex justify-content-center align-items-center">
          <button type="button" class="content-btn btn btn-outline-primary">View</button>
        </div>
      </a>
    
    </div>
    
    <div class="product-bottom  pt-3">
      <a href="/pdp.html?id=${product.id}"><h3 class="card-title mb-0">${product.title}</h3></a>
      <div class="feature-info__price d-flex flex-row align-items-center justify-content-between">
        <h5 class=" card-text  mb-0">NOK ${product.price}</h5>
        <i class="fav fa fa-heart-o"></i>
      </div>
    </div>
    </div> `
}