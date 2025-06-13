// shop.js
console.log("✅ shop.js is loaded");

function addToCart(name, price, image) {
  console.log("🛒 addToCart called:", name, price, image);

  // Get existing cart from localStorage or start a new one
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item is already in cart
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1; // increase quantity
    console.log("🔁 Item already in cart. Quantity increased to:", existingItem.quantity);
  } else {
    cart.push({ name, price, image, quantity: 1 }); // new item with quantity
    console.log("🆕 New item added to cart.");
  }

  // Save the updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Notify the user
  alert(`${name} added to cart!`);
}
