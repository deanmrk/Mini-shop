const cartItems = document.querySelector('.cart-items');
const totalHtml = document.querySelector('.total');
let cartMain = JSON.parse(localStorage.getItem('getCart')) || [];

renderItem()
function renderItem() {

let total = 0;

cartMain.forEach( (items, i) => {
    total += items.price;

    cartItems.innerHTML += `
     <span>${items.name}</span>
     <span>$${(items.price / 100).toFixed(2)}</span>
     <button onclick="cartMain.splice(${i}, 1); renderItem(); removeItem();">Remove</button><br>
    `;
});



totalHtml.textContent = `Total: $${(total).toFixed(2)}`;
}

function removeItem() {
    localStorage.removeItem('getCart');
    cartItems.innerHTML = '';
}