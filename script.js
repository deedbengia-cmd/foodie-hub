function login(){
  let phone = document.getElementById("phone").value;

  if(phone === ""){
    alert("Please enter phone number");
    return;
  }

  localStorage.setItem("userPhone", phone);
  window.location.href = "home.html";
}
