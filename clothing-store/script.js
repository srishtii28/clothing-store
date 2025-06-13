// Welcome message in the browser console
console.log("Welcome to the Clothing Store!");

// Example future feature placeholder
document.addEventListener("DOMContentLoaded", () => {
  const shopButton = document.querySelector(".hero button");
  if (shopButton) {
    shopButton.addEventListener("click", () => {
      alert("Shop feature coming soon!");
      // Later we'll link this to the Shop page
    });
  }
});

