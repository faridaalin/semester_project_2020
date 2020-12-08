import { showMessage } from '../helpers/showMessage.js';
import { removeMessage } from '../helpers/removeMessage.js';
import { fectData } from '../helpers/fetcData.js';



export const uploadFile = (url, token, formData) => {
    removeMessage('#msg')
    console.log('formData:', formData);


    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            //"Content-Type": "application/json"
        },
        body: formData
    }


    const getData = async (url, options) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw ({
                    status: response.status,
                    statusText: response.statusText
                })
            }
            return await response.json();

        } catch (error) {
            console.error(error.statusText);
            return error.statusText;

        }
    };
    getData(url, options);

}

