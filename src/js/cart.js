import { qs, getLocalStorage, renderListWithTemplate } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");
const cartList = qs(".product-list");
const cartTotal = qs(".cart-total");

function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>
  `;
}

function renderCartContents() {
  if (!cartItems || cartItems.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "$0.00";
    return;
  }

  renderListWithTemplate(
    cartItemTemplate,
    cartList,
    cartItems,
    "afterbegin",
    true
  );

  calculateCartTotal(cartItems);
}

function calculateCartTotal(items) {
  const total = items.reduce(
    (sum, item) => sum + item.FinalPrice,
    0
  );
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

renderCartContents();