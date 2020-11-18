export const showMessage = (cssClass, msg) => {
    const msgContainer = document.querySelector('.message-container');

    return msgContainer.innerHTML = `<div class="alert alert-${cssClass}" role="alert">
    ${msg}
  </div>`;

}
