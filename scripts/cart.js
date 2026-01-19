const cartItems = document.querySelector('.cart-items');
const totalHtml = document.querySelector('.total');

let cartMain = JSON.parse(localStorage.getItem('getCart')) || [];
let total = 0;

cartMain.forEach( items => {
    total += items.price;
    cartItems.innerHTML += ` <span>${items.name}</span>
     <span>$${(items.price / 100).toFixed(2)}</span>
    `;
});

totalHtml.textContent = `Total: $${total}`;