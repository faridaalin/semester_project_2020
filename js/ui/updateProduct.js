import { showMessage } from "../helpers/showMessage.js";
import { removeMessage } from "../helpers/removeMessage.js";
import { spinner } from '../elements/spinner.js';

export const updateProduct = (obj, url, token) => {
   
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    
    setTimeout(async () => {
      try {
        const res = await fetch(url, options);
        const updatedProduct = await res.json();
  
        if(updatedProduct.updated_at) {
          const msg = "Product has been updated.";
          showMessage("success", msg, "#msg");
        };
        
        if(updatedProduct.error) {
          const msg = "Error.";
          showMessage("danger", msg, "#msg");
        };
  
      } catch (error) {
        console.log(error);
      }
    }, 1000);

  };