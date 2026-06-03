async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();

        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}

function updateCartCount(){
    let cart = JSON.parse(
        localStorage.getItem("cart")
    );

    if(!Array.isArray(cart)){
        cart = [];
    }

    // Calculate total items (sum of all quantities)
    let totalItems = cart.reduce((total, item) => {
        return total + (item.quantity || 1);
    }, 0);

    const cartCountElement = document.getElementById("cartCount");
    if(cartCountElement) {
        cartCountElement.innerText = totalItems;
    }
}

loadComponent("footer-container", "footer.html");

async function loadHeader() {
    try {
        const response = await fetch("header.html");
        const html = await response.text();

        const headerContainer = document.getElementById("header-container");
        headerContainer.innerHTML = html;
        
        // Ensure the header container itself doesn't interfere with sticky
        headerContainer.style.position = 'relative';
        headerContainer.style.zIndex = '999';
        
        // Force a reflow to ensure styles are applied
        headerContainer.offsetHeight;
        
        updateCartCount();
        
        // Update wishlist count after header is loaded
        if (typeof updateWishlistCount === 'function') {
            updateWishlistCount();
        }
    } catch (error) {
        console.error(error);
    }
}
loadHeader();