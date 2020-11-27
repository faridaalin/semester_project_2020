import {loadCurrentItems} from '../helpers/loadCurrentItems.js'
import {cart, favs} from '../utils/settings.js';
import {renderFavs} from '../fav.js';

export const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};
export const saveCartItemsToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    loadCurrentItems(key, '.cart-icon span');
    
};

export const saveToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
};

export const getFromSessionStorage = (key) => {
    const value = sessionStorage.getItem(key);
    if(value === null) {
        return null;
    }else {
        return JSON.parse(value);
    }
};

export const getFromLocal = (key) => {
    const value = localStorage.getItem(key);
    if(value === null) {
        return null;
    }else {
        return JSON.parse(value);
    }
};



export const saveToFavsListStorage = (tag, list) => {
    saveToLocal(tag, list);
    loadCurrentItems(tag, '.favs-icon span');
     renderFavs();
  };
  


