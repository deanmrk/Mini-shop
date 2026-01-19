let cart = JSON.parse(localStorage.getItem('getCart')) || [];

const container = document.querySelector('.container');
renderProducts()
function renderProducts() {
    let productHTML = '';
    products.map( (value, i) => {
    productHTML += `
    <div class="product-container">
                <div class="product">
                    <img class="product-img" src="${value.image}">
                    <p class="product-name">${value.name}</p>
                    <p class="product-price">$${(value.price / 100).toFixed(2)}</p>
                    <div class="btn-container">
                        <button onclick="addCart(${value.id})" class="cart-button"><img class="cart-img" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart-image"></button>
                    </div>
                </div>
            </div>
    `
});

container.innerHTML = productHTML;
};

function addCart(id) {
    const items = products.find(p => p.id === id);
    cart.push(items);
    alert('added to cart');
    localStorage.setItem('getCart', JSON.stringify(cart));
};