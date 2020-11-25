export  const fectData =  async (url, options) => {

    if(!options) {
        try {
            const response = await fetch(url);
            if(!response.ok) {       
                throw ({status: response.status,
                    statusText: response.statusText})
            }
            return await response.json();
      
        } catch (error) {
            console.error(error.statusText);
            return error.statusText;
           
        }

    }

};

