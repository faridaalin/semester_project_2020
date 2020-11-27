import {loadCurrentItems} from '../helpers/loadCurrentItems.js'
import {cart, favs} from '../utils/settings.js';
import {renderFavs} from '../fav.js';

const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};
const saveCartItemsToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    loadCurrentItems(key, '.cart-icon span');
    
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



const saveToFavsListStorage = (tag, list) => {
    saveToLocal(tag, list);
    loadCurrentItems(tag, '.favs-icon span');
    renderFavs();
  };
  



export {saveToLocal, getFromLocal, saveCartItemsToLocal, saveToSessionStorage, getFromSessionStorage, saveToFavsListStorage};