export const removeMessage = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = "";
}