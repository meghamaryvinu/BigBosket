// Wishlist utility functions

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function addToWishlist(product) {
    const wishlist = getWishlist();
    const exists = wishlist.find(item => item.id === product.id);
    
    if (!exists) {
        wishlist.push(product);
        saveWishlist(wishlist);
        return true; // Added successfully
    }
    return false; // Already exists
}

function removeFromWishlist(productId) {
    const wishlist = getWishlist();
    const filtered = wishlist.filter(item => item.id !== productId);
    saveWishlist(filtered);
}

function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
}

function updateWishlistCount() {
    const wishlist = getWishlist();
    const countElements = document.querySelectorAll('#wishlistCount');
    countElements.forEach(element => {
        element.innerText = wishlist.length;
    });
    
    // If no elements found, try again after a short delay (header might still be loading)
    if (countElements.length === 0) {
        setTimeout(() => {
            const retryElements = document.querySelectorAll('#wishlistCount');
            retryElements.forEach(element => {
                element.innerText = wishlist.length;
            });
        }, 200);
    }
}

function toggleWishlist(product) {
    if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
        return false; // Removed
    } else {
        addToWishlist(product);
        return true; // Added
    }
}

// Initialize wishlist count when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateWishlistCount, 100);
});