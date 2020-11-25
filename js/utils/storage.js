import {loadCurrentItems} from '../helpers/loadCurrentItems.js'
import {cart} from '../utils/settings.js'

const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};
const saveCartItemsToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log('save');
    loadCurrentItems(cart, '.cart-icon span');
    
};

const saveToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
};
const getFromSessionStorage = (key) => {
    const value = sessionStorage.getItem(key);
    if(value === null) {
        return null;
    }else {
        return JSON.parse(value);
    }
};

const getFromLocal = (key) => {
    const value = localStorage.getItem(key);
    if(value === null) {
        return null;
    }else {
        return JSON.parse(value);
    }
};




export {saveToLocal, getFromLocal, saveCartItemsToLocal, saveToSessionStorage, getFromSessionStorage};