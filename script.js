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
}
