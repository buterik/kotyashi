function showCart() {
  var cart = document.getElementById("cart-wrapper");
  cart.className = "cart-wrapper shown";
  var body = document.getElementById("body");
  body.className = "no-scroll"
};

function hideCart() {
	var cart = document.getElementById("cart-wrapper");
	cart.className = "cart-wrapper hidden";
	var body = document.getElementById("body");
  body.className = ""
}


document.getElementById("showCart").addEventListener("click", function(){
    event.preventDefault();
    showCart()
});

document.getElementById("hideCart").addEventListener("click", function(){
    event.preventDefault();
    hideCart()
});

