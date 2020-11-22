import { cart } from '../utils/settings.js'
import { getFromLocal } from '../utils/storage.js'





export const getTotalPrice = () => {
  const currentCart = getFromLocal(cart);

  let total = 0;

  if (!currentCart) {
    return total;
  }

  total = currentCart.reduce(function (acc, obj) { return acc + (obj.product.price * obj.qty) }, 0);

  return total;

}
