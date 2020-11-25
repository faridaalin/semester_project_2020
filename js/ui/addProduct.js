import {showMessage} from '../helpers/showMessage.js';
import {removeMessage} from '../helpers/removeMessage.js';
import {fectData} from '../helpers/fetcData.js';



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

        
    fectData(url, options).then(result => {
        if(!result || typeof result === 'string') {
          showMessage('danger', result, '#msg');
          return;
        
           }
           console.log(result);
           if(result.created_at) {
            const msg = `${obj.title} has been created`;
            showMessage('success', msg, '#msg')
        }
      });
}