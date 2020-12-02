import { loadCurrentItems } from '../helpers/loadCurrentItems.js';
import renderAllProducts from '../elements/renderAllProducts.js';
import {spinner} from '../elements/spinner.js'

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
    if (value === null) {
        return null;
    } else {
        return JSON.parse(value);
    }
};

export const getFromLocal = (key) => {
    const value = localStorage.getItem(key);
    if (value === null) {
        return null;
    } else {
        return JSON.parse(value);
    }
};


export const saveToFavsListStorage = (tag, list) => {
    saveToLocal(tag, list);
    loadCurrentItems(tag, '.favs-icon span');

    if(location.pathname === "/fav.html") {
        spinner('.fav-container');
        setTimeout(() => {
            renderAllProducts(list, "some message", '.fav-container');
        }, 500);

    }

};



