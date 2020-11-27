import { cart } from '../utils/settings.js';
import { saveToLocal, saveCartItemsToLocal, getFromLocal } from '../utils/storage.js';

const addQty = () => {
  const increment = document.querySelector('.pluss');
  const decrement = document.querySelector('.minus');
  const qty = document.querySelector('.value');


  let value = 1;
  const handleIncrement = () => {
    qty.textContent = value += 1;

  };
  const handleDecrement = () => {
    if (value <= 1) {
      return qty.textContent = value = 1;
    }
    qty.textContent = value -= 1;

  };


  increment.addEventListener('click', handleIncrement);
  decrement.addEventListener('click', handleDecrement);

}

const addSize = () => {

  const select = document.querySelector('.custom-select ');
  let selectedSize;

    if (isNaN(select.value)) {
      select.classList.add('is-invalid')
      return;
    } else {
      select.classList.remove('is-invalid')
      select.classList.add('is-valid')
    }
    selectedSize = parseInt(select.value);


  return selectedSize;

  select.addEventListener('change', handleSize);

}


export function addToCart(product) {
  addQty();

  const addToCartBtn = document.querySelector('#addToCart');

  let localCart = getFromLocal(cart);

  if (!localCart) localCart = [];

  addToCartBtn.addEventListener('click', function (e) {
    
    addSize();

    const qty = document.querySelector('.value').textContent;
    const selectedQty = parseInt(qty);
    const selectedSize = addSize();

    if (!selectedSize) return;

    const alreadyInCart = localCart.find((item) => {
      return item.product.id === product.id
    });

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
      return;


    } else {

      const item = localCart.find((item) => {
        return item.qtySize[0].size === selectedSize
      });
      
        if(!item) {
    
          alreadyInCart.qtySize = [...alreadyInCart.qtySize,       
            {
              size: selectedSize,
              qty: selectedQty,
            }]
        saveCartItemsToLocal(cart, localCart);
        return;


        
        }else {
          item.qtySize[0].qty = item.qtySize[0].qty  + selectedQty;
          saveCartItemsToLocal(cart, localCart);
          return;

        }

    }


  });
}






