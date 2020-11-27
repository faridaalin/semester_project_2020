import {createRatingArray} from '../helpers/createRatingArray.js'

export const productDetail = (product) => {
   const container = document.querySelector('.pdp-detail-container');

  const rating = createRatingArray(product)
  
   container.innerHTML = `
  <div class="img-container col-12 col-md-6 d-flex flex-column flex-sm-row-reverse">
  <div class="col col-sm-2 d-flex justify-content-between flex-sm-column order-2 px-0">
   <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
   <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
   <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
   <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
   </div>
   <img class="pdp-img col col-sm-10 px-0 pb-4 pb-sm-0" src="${product.image_url}" alt="" srcset="" />
  </div>


<div class="col-12 col-md-6 pt-4 mt-4 pt-md-0 mt-md-0 ">
<div class="content-container">
<h3 class="pb-1">${product.title}</h3>
<div class="rating-container pb-4">
<small class="pb-2">${product.brand}</small>
<div class="rating">
${rating.map(star => star).join('')}
</div>
</div>
   <div class=" pt-4 mt-4 pt-md-0 mt-md-0">
  <p class="pb-4">
  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
  ligula. Mauris consequat ornare feugiat.
  </p>
  <h5 class="price-title pb-4">${product.price} NOK</h5>
   </div>


</div>

   <div class="checkout d-flex flex-column flex-lg-row pb-1">
     <div class="qty-container">
       Quantity
       <button type="button" class="btn minus" data-type="dec">-</button>
       <span class="value">1</span>
       <button type="button" class="btn pluss" data-type="inc">+</button>
     </div>
     <div class="input-group flex-fill mb-4">
       <select class="custom-select size h-100" id="inputGroupSelect02">
         <option selected>Choose size</option>
         <option value="40">40</option>
         <option value="42">42</option>
         <option value="43">43</option>
         <option value="44">44</option>
         <option value="45">45</option>
         <option value="46">46</option>
       </select>
       <i class="fa fa-angle-down"></i>
     </div>
   </div>

   <div class="checkout d-flex pt-2">
     <button type="button" id="addToCart" class="btn btn-secondary flex-fill">
       Add to cart
     </button>
   </div>


</div> `

}



