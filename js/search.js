// Global search functionality

function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBox && searchInput) {
        if (searchBox.style.display === 'none') {
            searchBox.style.display = 'block';
            searchInput.focus();
        } else {
            searchBox.style.display = 'none';
            searchInput.value = '';
        }
    }
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            localStorage.setItem('searchTerm', searchTerm);
            window.location.href = 'products.html';
        }
    }
}

function performSearch(searchTerm) {
    localStorage.setItem('searchTerm', searchTerm);
    window.location.href = 'products.html';
}

// Set up search functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add Enter key support for search
    setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchProducts();
                }
            });
        }
    }, 100); // Small delay to ensure header is loaded
});