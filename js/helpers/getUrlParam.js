export const getUrlParam = (param) => {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    const element = urlParam.get(param);
  
    return element;
  }
  