import {loadCartNumbers} from '../helpers/loadCartNumers.js'

const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};
const saveCartItemsToLocal = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
    loadCartNumbers();
    
};



const getFromLocal = (key) => {
    const value = localStorage.getItem(key);
    if(value === null) {
        return null;
    }else {
        return JSON.parse(value);
    }
};




export {saveToLocal, getFromLocal, saveCartItemsToLocal};