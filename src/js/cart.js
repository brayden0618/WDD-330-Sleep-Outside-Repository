import { getLocalStorage } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");
const cartList = document.querySelector(".product-list");

if (cartItems.length === 0) {
  cartList.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cartItems.forEach(item => renderCartItem(item));
}

function renderCartItem(item) {
  const li = document.createElement("li");
  li.classList.add("cart-card");

  li.innerHTML = `
    <img src="${item.Image}" alt="${item.Name}">
    <h2>${item.Name}</h2>
    <p>$${item.FinalPrice}</p>
  `;

  cartList.appendChild(li);
}