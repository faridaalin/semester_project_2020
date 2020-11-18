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


export {saveToLocal, getFromLocal};