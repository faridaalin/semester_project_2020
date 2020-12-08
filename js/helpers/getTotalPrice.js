import { cart } from '../utils/settings.js'
import { getFromLocal } from '../utils/storage.js';
import { getRoundNumber } from '../helpers/getRoundNumber.js';

export const getTotalPricePerItem = (product) => {
  const qty = product.qtySize.reduce((acc, totalQty) => { return acc + totalQty.qty }, 0);
  return getRoundNumber(qty * product.product.price);
};

export const getTotalPrice = () => {

  const currentCart = getFromLocal(cart);
  let total = 0;

  if (!currentCart) {
    return total;
  }

  total = currentCart.reduce((acc, obj) => {
    obj.qtySize.forEach(qty => {
      acc += (obj.product.price * qty.qty)
    });

    return acc;
  }, 0);

  return total = getRoundNumber(total);

}


