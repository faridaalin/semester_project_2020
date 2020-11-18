const BASE_URL = `http://localhost:1337`;
const user = "user";
const userToken = "userToken";

const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};

const getFromLocal = (key) => {
    const value = localStorage.getItem(key);
    if(value === null) {
        return null;
    }else {
        return JSON.parse(value);
    }
};

export {BASE_URL, user, userToken, saveToLocal, getFromLocal};