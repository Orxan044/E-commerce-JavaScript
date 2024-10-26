const products = [
    { "title": "Wireless Mouse", "category": "Electronics", "price": 25.99, "stock": 150 },
    { "title": "Bluetooth Headphones", "category": "Electronics", "price": 59.99, "stock": 85 },
    { "title": "Office Desk Chair", "category": "Furniture", "price": 119.99, "stock": 0 },
    { "title": "Stainless Steel Water Bottle", "category": "Home & Kitchen", "price": 19.99, "stock": 0 },
    { "title": "Yoga Mat", "category": "Fitness", "price": 29.99, "stock": 75 },
    { "title": "Gaming Keyboard", "category": "Electronics", "price": 79.99, "stock": 60 },
    { "title": "LED Desk Lamp", "category": "Home & Kitchen", "price": 39.99, "stock": 0 },
    { "title": "Electric Kettle", "category": "Home & Kitchen", "price": 34.99, "stock": 90 },
    { "title": "Fitness Tracker", "category": "Wearables", "price": 49.99, "stock": 40 },
    { "title": "Backpack", "category": "Accessories", "price": 39.99, "stock": 10 }
];

const basket = [];

// ---------------- MARKET MAP ---------------------------

function uptadeMarket(){

    const container = document.getElementById("container");

    const divCenter = document.createElement("div");
    divCenter.classList.add("center-div");

    products.map(product =>{

        const divProduct = document.createElement("a");
        divProduct.classList.add("product-div");

        
        const productTitle = document.createElement("h1");
        productTitle.innerText = product.title;
        productTitle.classList.add("productTitle");

        const productCategory = document.createElement("p");
        productCategory.innerText = `Category: ${product.category}`;
        productCategory.classList.add("productDesing");

        const productPrice = document.createElement("p");
        productPrice.innerText = `Price: ${product.price} $`;
        productPrice.classList.add("productDesing");

        const productStock = document.createElement("p");
        productStock.innerText = `Stock: ${product.stock} pcs`;
        productStock.classList.add("productDesing");

        divProduct.addEventListener("click",() =>
        {
            if (product.stock > 0) 
            { 
                const existingProduct = basket.find(item => item.title === product.title);

                if (existingProduct) { existingProduct.count++; }
                else { basket.push({ ...product, count: 1 }); }

                product.stock--;
                
                console.log(`${product.title} added to basket`);
                container.innerHTML = "";
                uptadeMarket(); 
                updateBasket();
            } 
            else { console.log(`${product.title} is out of stock`); }
        });

        divProduct.appendChild(productTitle);
        divProduct.appendChild(productCategory);
        divProduct.appendChild(productPrice);
        divProduct.appendChild(productStock);

        divCenter.appendChild(divProduct);

    });

    container.appendChild(divCenter);
}

// ---------------- BASKET MAP ---------------------------


function updateBasket() {
    const basketContainer = document.getElementById("container-basket");
    basketContainer.innerHTML = "";

    const divCenterBasket = document.createElement("div");
    divCenterBasket.classList.add("center-div");
    let totalPrice = 0;
    let totalCount = 0;

    basket.map(productBasket => {
        const divProductBasket = document.createElement("a");
        divProductBasket.classList.add("product-div-basket");

        const productBasketTitle = document.createElement("h1");
        productBasketTitle.innerText = productBasket.title;
        productBasketTitle.classList.add("productTitle");

        const productBasketCategory = document.createElement("p");
        productBasketCategory.innerText = `Category: ${productBasket.category}`;
        productBasketCategory.classList.add("productDesing");

        const productBasketPrice = document.createElement("p");
        productBasketPrice.innerText = `Price: ${productBasket.price} $`;
        productBasketPrice.classList.add("productDesing");

        const productBasketCount = document.createElement("p");
        productBasketCount.innerText = `Count: ${productBasket.count} pcs`;
        productBasketCount.classList.add("productDesing");  


        divProductBasket.appendChild(productBasketTitle);
        divProductBasket.appendChild(productBasketCategory);
        divProductBasket.appendChild(productBasketPrice);
        divProductBasket.appendChild(productBasketCount);

        totalPrice += (productBasket.count * productBasket.price);
        totalCount += productBasket.count
        
        
        divCenterBasket.appendChild(divProductBasket);
    });
    
    const total = document.getElementById("total");
    total.innerText =`Total : ${totalPrice} $`; 
    total.classList.add("total");  


    const count = document.getElementById("count");
    count.innerText =`Total Count : ${totalCount} pcs`; 
    count.classList.add("total-count");  


    basketContainer.appendChild(divCenterBasket);
}

uptadeMarket();
updateBasket();
