// Определение функции для получения продуктов
function fetchProducts(product_id) {
    return fetch("http://0.0.0.0:8000/" + product_id)
    .then(response => response.json()); 
}

function renderNewProductList(products){

    let htmlBlock = document.getElementById('card-list-news');
    
    products.map((product) => {

        imagesBackendURL = "http://0.0.0.0:8000/res/";
        const imgSrc = imagesBackendURL + product.id;

        const productBlock = document.createElement('a');
        productBlock.innerHTML = `
        <a class="clicked-a" href="#">
            <div class="card">
                <img class="card-img" src="${imgSrc}" alt="">
                <div class="card-content">
                    <div class="card-title">${product.title}</div>
                    <div class="card-price">${product.price}₽</div>
                </div>
            </div>
        </a>
        `;

        htmlBlock.insertAdjacentElement('afterbegin', productBlock);
    })    
}

function renderPopProductList(products){
    
    let htmlBlock = document.getElementById('card-list-pop');
    
    products.map((product) => {

        imagesBackendURL = "http://0.0.0.0:8000/res/";
        const imgSrc = imagesBackendURL + product.id;

        const productBlock = document.createElement('a');
        productBlock.innerHTML = `
        <a class="clicked-a" href="#">
            <div class="card">
                <img class="card-img" src="${imgSrc}" alt="">
                <div class="card-content">
                    <div class="card-title">${product.title}</div>
                    <div class="card-price">${product.price}₽</div>
                </div>
            </div>
        </a>
        `;

        htmlBlock.insertAdjacentElement('afterbegin', productBlock);
    })    
}

// Самовызывающаяся функция, которая ждёт результат fetchProducts
(async function afterStart() {

    const newProducts = [];

    const news1 = await fetchProducts(2);
    newProducts.push(news1);
    const news2 = await fetchProducts(3);
    newProducts.push(news2);
    const news3 = await fetchProducts(4);
    newProducts.push(news3);
    const news4 = await fetchProducts(5);
    newProducts.push(news4);


    const popProducts = [];

    const pop1 = await fetchProducts(6);
    popProducts.push(pop1);
    const pop2 = await fetchProducts(7);
    popProducts.push(pop2);
    const pop3 = await fetchProducts(8);
    popProducts.push(pop3);
    const pop4 = await fetchProducts(9);
    popProducts.push(pop4);


    console.log(newProducts);  
    console.log(popProducts); 

    renderNewProductList(newProducts);
    renderPopProductList(popProducts);
})();
