export const showMessage = (cssClass, msg, tag) => {
    console.log(tag)
    const msgContainer = document.querySelector(tag);
    return msgContainer.innerHTML = `<div class="alert alert-${cssClass}" role="alert">${msg}</div>`;

}
