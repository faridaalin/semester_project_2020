import {getFromLocal} from '../utils/storage.js'

export const loadCurrentItems = (tag, container) => {

    const currentItems = getFromLocal(tag);


    const counterContainer = document.querySelector(container);
 
    let total = 0;

    if (!currentItems) {
        return counterContainer.textContent = total;
        
    }

     if(tag === "cart") {
        let sum = 0;
    
      currentItems.forEach(element => {
      
         element.qtySize.forEach((item) => {

            sum += (item.qty);
            
         });

         
      });
      total = sum;

  
         return  counterContainer.textContent =  total;
     } 



     if(tag === "favs") {  
        return  counterContainer.textContent = currentItems.length;
     }

}

