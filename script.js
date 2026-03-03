function login(){
  let phone = document.getElementById("phone").value;

  if(phone === ""){
    alert("Please enter phone number");
    return;
  }

  localStorage.setItem("userPhone", phone);
  window.location.href = "home.html";
}// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items
function addToCart(name, sizeId, qtyId){
  let price = parseInt(document.getElementById(sizeId).value);
  let quantity = parseInt(document.getElementById(qtyId).value);

  // Check if item already in cart
  let itemIndex = cart.findIndex(item => item.name === name && item.price === price);
  if(itemIndex > -1){
    cart[itemIndex].quantity += quantity;
  } else {
    cart.push({name:name, price:price, quantity:quantity});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}function displayCart(){
  let cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartContainer.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: 
          <input type="number" value="${item.quantity}" min="1" onchange="updateQty(${index}, this.value)">
        </p>
        <p>Subtotal: ₹${itemTotal}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function updateQty(index, qty){
  cart[index].quantity = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function placeOrder(){
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }

  let message = "🛒 *New Order - Premium Food App*%0A%0A";
  let total = 0;

  cart.forEach(item=>{
    let itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `🍽 ${item.name} x ${item.quantity} = ₹${itemTotal}%0A`;
  });

  message += `%0A💰 *Total: ₹${total}*%0A%0A`;
  message += "✅ Please confirm this order.";

  let phoneNumber = "919363734907"; // your WhatsApp number
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}function addBurgerToCart(name, qtyId){
  let quantity = parseInt(document.getElementById(qtyId).value);
  let priceList = {
    "Classic Cheese Burger":50,
    "Steakhouse Cheese Burger":80,
    "Veggie Burger":40,
    "BBQ Burger":100
  };
  let price = priceList[name];

  // Check if item already in cart
  let itemIndex = cart.findIndex(item => item.name === name && item.price === price);
  if(itemIndex > -1){
    cart[itemIndex].quantity += quantity;
  } else {
    cart.push({name:name, price:price, quantity:quantity});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}function addFastFoodToCart(name, qtyId){
  let quantity = parseInt(document.getElementById(qtyId).value);
  let priceList = {
    "Chow Noodles":100,
    "Momos":100,
    "Thukpa":100,
    "Fried Rice":100
  };
  let price = priceList[name];

  let itemIndex = cart.findIndex(item => item.name === name && item.price === price);
  if(itemIndex > -1){
    cart[itemIndex].quantity += quantity;
  } else {
    cart.push({name:name, price:price, quantity:quantity});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}function addBeverageToCart(name, qtyId){
  let quantity = parseInt(document.getElementById(qtyId).value);
  let priceList = {
    "Coffee":50,
    "Tea":20,
    "Mojito":100,
    "Soft Drink":50
  };
  let price = priceList[name];

  let itemIndex = cart.findIndex(item => item.name === name && item.price === price);
  if(itemIndex > -1){
    cart[itemIndex].quantity += quantity;
  } else {
    cart.push({name:name, price:price, quantity:quantity});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}function login(){
  let username = document.getElementById("username").value.trim();
  let phone = document.getElementById("phone").value.trim();

  if(username === "" || phone === ""){
    alert("Please enter both name/email and phone number");
    return;
  }

  // Save user info
  localStorage.setItem("userName", username);
  localStorage.setItem("userPhone", phone);

  // Redirect to home page
  window.location.href = "home.html";
}function updateWhatsAppQR() {
  let message = "Hello! I want to place this order:%0A";

  cart.forEach(item => {
    message += `${item.name} - ${item.quantity} x ₹${item.price} = ₹${item.quantity * item.price}%0A`;
  });

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `Total: ₹${total}`;

  let waLink = `https://wa.me/9363734907?text=${message}`;

  let qrImg = document.getElementById("whatsapp-qr");
  if(qrImg){
    qrImg.src = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(waLink)}&chs=200x200`;
  }
}updateWhatsAppQR();
