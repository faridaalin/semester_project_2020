const renderHeroBanner = (url) => {
    const herobanner = document.querySelector('.herobanner');
    herobanner.style.backgroundImage = `url(${url})`;
}

export default renderHeroBanner;
