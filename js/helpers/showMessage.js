export const showMessage = (cssClass, msg) => {
    const msgContainer = document.querySelector('#msg');

    return msgContainer.innerHTML = `<div class="alert alert-${cssClass}" role="alert">${msg}</div>`;

}
