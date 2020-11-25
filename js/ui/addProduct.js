import {showMessage} from '../helpers/showMessage.js';
import {removeMessage} from '../helpers/removeMessage.js';
import {spinner} from '../elements/spinner.js';

export const addNewProduct =  (url, token, obj) => {
    removeMessage('#msg')

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }
    spinner('.add-container');

   
    
        try {
            const res = await fetch(url, options);
            const product = await res.json();
          
    
            if(product.created_at) {
                const msg = `${obj.title} has been created`;
                showMessage('success', msg, '#msg')
            }
           
        }
        catch (error) {
            console.log(error);
            const msg = `Something went wrong, please try again later`;
            showMessage('warning', msg, '#msg')
        }
        
  


}