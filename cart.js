document.addEventListener('DOMContentLoaded', function () {
    let cartCountElement = document.getElementById('cartCount');
    let cartIconElement = document.getElementById('cartIcon');
    let isLoggedIn = localStorage.getItem("loggedIn");


    // Function to update cart count
    function updateCartCount(count) {
        if (isLoggedIn === "true") {

            if (cartCountElement) {
                cartCountElement.textContent = count;
            }
        }
        else {
            if (cartCountElement) {
                cartCountElement.textContent = 0;
            }
        }
    }
    //cart logout



    // Fetch the cart count from localStorage (or any other storage mechanism)
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cartItems.length);

    // Add click event to cart icon
    if (cartIconElement) {
        cartIconElement.addEventListener('click', function () {
            if (isLoggedIn === "false") {
                window.location.href = "./page/login.html"
            }
            else {
                window.location.href = "cart.html"
            }
        });
    }
    auth()
});

// Example function to add items to the cart and update count
function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount(cartItems.length);
}

// Function to update cart count in the UI
function updateCartCount(count) {
    let cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

function auth() {
    let authBtn = document.querySelector("#authBtn")
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
        authBtn.textContent = "Logout"
    }
    else {
        authBtn.textContent = "Login"
    }
}
function redirect() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
        localStorage.setItem("loggedIn", false)
        window.location.href = "index.html"
    }
    else {
        localStorage.setItem("loggedIn", true)
        window.location.href = "../page/login.html"
    }
}





