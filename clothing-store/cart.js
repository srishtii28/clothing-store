document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
  
    function renderCart() {
      cartContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item, index) => {
        total += parseFloat(item.price) * item.quantity;
  
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-details">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <div style="margin: 10px 0;">
              <button onclick="decreaseQty(${index})">−</button>
              <span style="margin: 0 10px;">${item.quantity}</span>
              <button onclick="increaseQty(${index})">+</button>
            </div>
            <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeItem(${index})" style="background:#ff4d4d;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">Remove</button>
          </div>
        `;
        cartContainer.appendChild(div);
      });
  
      totalPriceEl.textContent = `$${total.toFixed(2)}`;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    window.increaseQty = (index) => {
      cart[index].quantity += 1;
      renderCart();
    };
  
    window.decreaseQty = (index) => {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      renderCart();
    };
  
    window.removeItem = (index) => {
      cart.splice(index, 1);
      renderCart();
    };
  
    window.clearCart = () => {
      localStorage.removeItem("cart");
      location.reload();
    };
  
    renderCart();
  });
  