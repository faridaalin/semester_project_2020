import { cart } from '../utils/settings.js';
import { saveCartItemsToLocal, getFromLocal } from '../utils/storage.js';
import { addQty } from '../helpers/addQty.js';
import { addSize } from '../helpers/addSize.js';


export function addToCart(product) {
  const addToCartBtn = document.querySelector('#addToCart');
  let localCart = getFromLocal(cart);

  if (!localCart) localCart = [];

  addToCartBtn.addEventListener('click', function (e) {
    addQty(); 

    const qty = document.querySelector('.value').textContent;
    const selectedQty = parseInt(qty);
    const selectedSize = addSize();

    if (!selectedSize) return;

    const alreadyInCart = localCart.find((item) =>  item.product.id === product.id);

    if (!alreadyInCart) {
      //NEW ITEM 
      localCart = [...localCart, {
        product: product,
        qtySize: [
          {
            size: selectedSize,
            qty: selectedQty,
          }
        ],
        product,
      }];
      saveCartItemsToLocal(cart, localCart);
    } else {
      const item = localCart.find((item) => {
        return item.qtySize[0].size === selectedSize
      });

      if (!item) {

        alreadyInCart.qtySize = [...alreadyInCart.qtySize,
        {
          size: selectedSize,
          qty: selectedQty,
        }]
        saveCartItemsToLocal(cart, localCart);

      } else {
        item.qtySize[0].qty = item.qtySize[0].qty + selectedQty;
        saveCartItemsToLocal(cart, localCart);
        return;

      }
    }

  });
}






