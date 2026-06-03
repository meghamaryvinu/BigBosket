function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!Array.isArray(cart)) {
        cart = [];
    }
    return cart;
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateGlobalCartCount();
}

function updateGlobalCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => {
        return total + (item.quantity || 1);
    }, 0);
    
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(element => {
        element.innerText = totalItems;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateGlobalCartCount();
});

window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateGlobalCartCount();
    }
});