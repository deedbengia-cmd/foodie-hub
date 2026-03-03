let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItemsDiv.innerHTML += `
            <div>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalDiv.innerHTML = "Total: ₹" + total;
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Clear cart
function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
}

// Send order to WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let message = "🛒 New Order:%0A";

    let total = 0;

    cart.forEach(item => {
        message += item.name + " - ₹" + item.price + "%0A";
        total += item.price;
    });

    message += "%0ATotal: ₹" + total;

    let phone = "919362734907";  // replace with your number
    let url = "https://wa.me/" + phone + "?text=" + message;

    window.open(url, "_blank");
}

// Run cart display on cart page load
document.addEventListener("DOMContentLoaded", displayCart);
