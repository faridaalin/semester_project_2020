import { cart } from "../utils/settings.js";
import { getFromLocal, saveCartItemsToLocal } from "../utils/storage.js";
import { getTotalPrice, getTotalPricePerItem, } from "../helpers/getTotalPrice.js";
import { deleteItem } from "../helpers/deleteItem.js";


const removeItemFromCart = (cartItems) => {
  const deleteItems = document.querySelectorAll(".delete-icon");

  deleteItems.forEach(itemToDelete => {
    const handleItemToDelete = (e) => {
        const id = parseInt(e.target.dataset.id);
        const updatedCartITems = deleteItem(cartItems, id);
        saveCartItemsToLocal(cart, updatedCartITems);
        showCartItems();
      };
      itemToDelete.addEventListener("click", handleItemToDelete);
  });
};

export const showCartItems = () => {
  const cartItems = getFromLocal(cart);

  const cartItemsContainer = document.querySelector('.cart-items-container');
  const cartTotalContainer = document.querySelector('.cart-total-container');
  const checkoutContainer = document.querySelector('.cart-container');

  cartItemsContainer.innerHTML = "";
  cartTotalContainer.innerHTML = "";

  if (!cartItems || cartItems.length === 0) {
    return checkoutContainer.innerHTML = `<div class="alert alert-info" role="alert">
    Your cart is currently empty.
  </div>`;
  }

  cartItems.map((item) => {
    cartItemsContainer.innerHTML += `
    <div>
      <div class="cart-detail mb-5 pb-5 mb-md-0">
        <div class="bag-container d-flex pb-4 mb-4">

          <a href="/pdp.html?id=${item.product.id
        }">
            <div class="bag-img embed-responsive embed-responsive-4by3" style="background-image: url(${item.product.image_url
        })"></div>
          </a>
          <div class=" cart-content-container">
            <div class="grid--cart">
              <div class="d-flex flex-crow justify-content-between w-100">
                <p class="light-text cart-brand mb-1">${item.product.brand}</p>
                <i class="fa fa-times delete-icon" data-id="${item.product.id}"></i>
              </div>

              <div class="d-lg-flex justify-content-between">
                <div class="pb-md-3 flex-grow-1 pb-md-0 align-text-bottom ">
                  <p class="cart-title">${item.product.title}</p>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center w-100 col-lg-8 pl-0">

                  <div class="qtySize-container d-flex flex-wrap flex-column w-100">

                    ${item.qtySize
                    .map((itemSizes) => {
                    return `
                    <div class="qtySize-container d-flex">
                      <p class="light-text flex-grow-1 align-text-bottom pr-2">Size ${itemSizes.size}</p>
                      <p class="light-text flex-grow-1 align-text-bottom text-right">Qty ${itemSizes.qty}</p>
                    </div>`;
                    })
                    .join("")}

                  </div>
                  <div class="d-flex flex-wrap  justify-content-between w-100">
                    <div>
                      <p class="large-text flex-grow-1 align-text-bottom mb-0">${item.product.price} NOK</p>
                    </div>
                    <div class="p-0 pl-lg-2">
                      <p class="large-text large-text--total flex-grow-1 align-text-bottom mb-0">Total:
                        ${getTotalPricePerItem(item)} NOK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
     `;
  });

  cartTotalContainer.innerHTML += `
  <div class="checkout-container">
    <div class="pt-4 pb-5 px-4">
      <h3 class="pt-2 pb-2">ORDER SUMMARY</h3>
    <div class="delivery pt-2 pb-4 d-flex justify-content-between align-items-center">
      <span>Delivery</span><span>FREE</span></div>
    <div class="total pt-2 pb-4 d-flex justify-content-between align-items-center"><span>Total sum</span><span>${getTotalPrice()} NOK</span></div>
      <button type="button" class="btn btn-secondary btn-block">Checkout</button>
    </div>
  </div>`;


  removeItemFromCart(cartItems);
};