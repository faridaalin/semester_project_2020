export const renderGridCategory = (products) => {
    const masonryGrid = document.querySelector('.masonry');
    const getMapFromArray = data =>
        data.reduce((acc, item) => {
            acc[item.category] = { item };
            return acc;
        }, {});

    const modifiedArray = getMapFromArray(products);

    for (const property in modifiedArray) {
        const name = modifiedArray[property].item.category;
        const nameToUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
        const img = modifiedArray[property].item.image_url;
        masonryGrid.innerHTML += `<a href="category.html?category=${name}" class="masonry__item" data-name="${name}" ><div class="masonry__image" style="background-image: url(${img});"><span>${nameToUpperCase}</span></div></a>`
    };
};
