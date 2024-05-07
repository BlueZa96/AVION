const productsType = {
    default: "default",
    pop: "popular",
    new: "new"
};

const apiUrl = '/api/';

// Определение функции для получения продуктов по ID
function fetchProductsByID(product_id) {
    return fetch(apiUrl + product_id)
    .then(response => response.json()); 
}

// Определение функции для получения всех продуктов
function fetchProductsByType(productsType) {
    return fetch(apiUrl + "products/" + productsType)
    .then(response => response.json()); 
}

function createHTMLCardBlock(title, price, imgSrc){
    const cardBlock = document.createElement('a');
    cardBlock.innerHTML = `
        <a class="clicked-a" href="#">
            <div class="card">
                <img class="card-img" src="${imgSrc}" alt="">
                <div class="card-content">
                    <div class="card-title">${title}</div>
                    <div class="card-price">${price}₽</div>
                </div>
            </div>
        </a>
        `;
    return cardBlock;
}

function createHTMLCardList(outputHTMLID, products){
    let htmlBlock = document.getElementById(outputHTMLID);
    
    products.map((product) => {

        imagesBackendURL = apiUrl + "res/";

        const imgSrc = imagesBackendURL + product.id;

        const productBlock = createHTMLCardBlock(product.title, product.price, imgSrc)        

        htmlBlock.insertAdjacentElement('afterbegin', productBlock);
    })   
}

function renderNewProductList(products){
    createHTMLCardList('card-list-news', products);
}

function renderPopProductList(products){
    createHTMLCardList('card-list-pop', products);
}

// Самовызывающаяся функция, которая ждёт результат fetchProducts
(async function afterStart() {
    const newProducts = await fetchProductsByType(productsType.new);
    const popProducts = await fetchProductsByType(productsType.pop);

    renderNewProductList(newProducts);
    renderPopProductList(popProducts);
})();
