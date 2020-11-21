import {getFromLocal} from '../utils/storage.js'


export const showCartTotal = (key) => {
    const currentCart = getFromLocal(key);

    let total = 0;

    if (!currentCart) {
        return total;
    }

    total = currentCart.reduce(function (acc, obj) { return acc + obj.qty; }, 0);
    const cartCounter = document.querySelector('.cart-icon .counter');
    cartCounter.innerText = total;
    console.log(total);
    console.log(cartCounter.innerText);
    return total; 
   
}