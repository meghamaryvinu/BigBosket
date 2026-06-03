const products = [
  {
    id: 1,
    name: "Fresh Apples",
    category: "Fruits",
    quantity: "1 kg",
    price: 199,
    rating: 4.8,
    image: "public/apple.jpg",
    bestseller: true
  },
  {
    id: 2,
    name: "Bananas",
    category: "Fruits",
    quantity: "12 pcs",
    price: 69,
    rating: 3.9,
    image: "public/banana.jpg",
    bestseller: false
  },
  {
    id: 3,
    name: "Oranges",
    category: "Fruits",
    quantity: "1 kg",
    price: 149,
    rating: 3.7,
    image: "public/orange.jpg",
    bestseller: false
  },
  {
    id: 4,
    name: "Tomatoes",
    category: "Vegetables",
    quantity: "1 kg",
    price: 39,
    rating: 3.5,
    image: "public/tomato.jpg",
    bestseller: false
  },
  {
    id: 5,
    name: "Potatoes",
    category: "Vegetables",
    quantity: "1 kg",
    price: 45,
    rating: 3.9,
    image: "public/potato.jpg",
    bestseller: false
  },
  {
    id: 6,
    name: "Farm Fresh Milk",
    category: "Dairy",
    quantity: "1 L",
    price: 65,
    rating: 4.7,
    image: "public/milk.jpg",
    bestseller: true
  },
  {
    id: 7,
    name: "Cheese Slices",
    category: "Dairy",
    quantity: "200 g",
    price: 145,
    rating: 3.8,
    image: "public/cheese.jpg",
    bestseller: false
  },
  {
    id: 8,
    name: "Brown Bread",
    category: "Bakery",
    quantity: "400 g",
    price: 45,
    rating: 4.6,
    image: "public/bread.jpg",
    bestseller: true
  },
  {
    id: 9,
    name: "Orange Juice",
    category: "Beverages",
    quantity: "1 L",
    price: 110,
    rating: 4.0,
    image: "public/orange-juice.jpg",
    bestseller: false
  },
  {
    id: 10,
    name: "Potato Chips",
    category: "Snacks",
    quantity: "150 g",
    price: 50,
    rating: 3.2,
    image: "public/chips.jpg",
    bestseller: false
  }
];

displayProducts(products);

// Check for search term when page loads
const searchTerm = localStorage.getItem('searchTerm');
if (searchTerm) {
    performSearch(searchTerm);
    localStorage.removeItem('searchTerm'); // Clear it after use
}

function performSearch(searchTerm) {
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    displayProducts(filtered);
    
    // Show search results message
    const container = document.getElementById("productContainer");
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; font-size: 1.2rem;">No products found for "' + searchTerm + '"</p>';
    } else {
        // Add search results header
        const resultsHeader = document.createElement('div');
        resultsHeader.style.cssText = 'text-align: center; margin-bottom: 20px; color: #0c3321; font-weight: bold;';
        resultsHeader.innerHTML = 'Search results for "' + searchTerm + '" (' + filtered.length + ' found)';
        container.parentNode.insertBefore(resultsHeader, container);
    }
}

function displayProducts(productList){

    const container =
    document.getElementById("productContainer");

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `

        <div class="card">
            <div style="position: relative;">
                <button onclick="toggleProductWishlist(${product.id})" 
                        style="position: absolute; top: 10px; right: 10px; background: white; border: 1px solid #ddd; border-radius: 50%; width: 35px; height: 35px; cursor: pointer; font-size: 16px; z-index: 10;"
                        id="wishlist-btn-${product.id}"
                        title="Add to wishlist">
                    ♡
                </button>
                <div onclick="openProduct(${product.id})" style="cursor: pointer;">
                    <img src="${product.image}">
                    <h3>${product.name}</h3>
                    <p style="font-size:10px">${product.quantity}</p>
                    <p class="price">₹${product.price}</p>
                    <p class="rating">⭐ ${product.rating}</p>
                </div>
            </div>
        </div>

        `;
    });

    // Update wishlist button states
    productList.forEach(product => {
        updateWishlistButton(product.id);
    });
}

function toggleProductWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const added = toggleWishlist(product);
        updateWishlistButton(productId);
        
        // Show feedback
        const btn = document.getElementById(`wishlist-btn-${productId}`);
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }
}

function updateWishlistButton(productId) {
    const btn = document.getElementById(`wishlist-btn-${productId}`);
    if (btn) {
        if (isInWishlist(productId)) {
            btn.innerHTML = '❤️';
            btn.style.background = '#ffebee';
            btn.style.borderColor = '#e57373';
            btn.title = 'Remove from wishlist';
        } else {
            btn.innerHTML = '♡';
            btn.style.background = 'white';
            btn.style.borderColor = '#ddd';
            btn.title = 'Add to wishlist';
        }
    }
}

function openProduct(id){

    localStorage.setItem(
        "selectedProduct",
        id
    );
    window.location.href =
    "product-detail.html";
}

function applyFilters() {

    const rating = Number(document.getElementById("ratingFilter").value);
    const category = document.getElementById("categoryFilter").value;
    const sort = document.getElementById("sortSelect").value;

    let result = [...products];

    if(rating > 0){
        result = result.filter(product =>
            product.rating >= rating
        );
    }

    if(category !== "all"){
        result = result.filter(product =>
            product.category === category
        );
    }

    if(sort === "low"){
        result.sort(
            (a,b) => a.price - b.price
        );
    }

    if(sort === "high"){
        result.sort(
            (a,b) => b.price - a.price
        );
    }

    displayProducts(result);
}
document
.getElementById("ratingFilter")
?.addEventListener("change", applyFilters);

document
.getElementById("categoryFilter")
?.addEventListener("change", applyFilters);

document
.getElementById("sortSelect")
?.addEventListener("change", applyFilters);