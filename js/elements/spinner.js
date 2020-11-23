export const spinner = (container, css) => {
    const element = document.querySelector(container);
    console.log(container);

    const cssClass = css ? css : "";

    return element.innerHTML = `<div class=" ${cssClass}">
    <div class="d-flex justify-content-center">
    <div class="spinner-border text-secondary" style="width: 3rem; height: 3rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
    </div>`;

};