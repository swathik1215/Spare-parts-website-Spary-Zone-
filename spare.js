function sendnext(){
    window.location.href = 'servicerequest2.html';
}

function findplace() {
    alert("✅ Service is available at your location.");
}
function addToCart() {
    const qty = parseInt(document.getElementById("quantity").value);
    const product = {
    name: "NGK Iridium Spark Plug (Set of 4)",
    part: "BKR6EIX-11",
    price: 3203,
    qty: qty
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${qty} item(s) added to cart!`);
}
function buyNow() {
    const qty = document.getElementById("quantity").value;
    alert(`Proceeding to checkout with ${qty} item(s).`);
    window.location.href = `checkout.html?item=NGK+BKR6EIX-11&qty=${qty}`;
}
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").textContent = totalQty;
}
window.onload = updateCartCount;