import {getFromLocal} from '../utils/storage.js'

export const loadCurrentItems = (tag, container) => {

    const currentItems = getFromLocal(tag);

    const counterContainer = document.querySelector(container);
 
    let total = 0;

    if (!currentItems) {
        return counterContainer.textContent = total;
        
    }

     if(tag === "cart") {
        total = currentItems.reduce(function (acc, obj) { return acc + obj.qty; }, 0); 
        return  counterContainer.textContent =  total;
     }

     if(tag === "favs") {
        return  counterContainer.textContent = currentItems.length;
     }


}

