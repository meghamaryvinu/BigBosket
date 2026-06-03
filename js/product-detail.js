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

const selectedId = Number(
    localStorage.getItem("selectedProduct")
);

const product = products.find(
    item => item.id === selectedId
);

console.log("selectedId:", selectedId);
console.log("product:", product);

if (product) {
    document.getElementById("productDetail").innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        
        <div class="product-info">
            <h1>${product.name}</h1>
            
            <div class="price-section">
                <span class="current-price">₹${product.price}</span>
            </div>
            
            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))} ${product.rating}</div>
            
            <div class="product-details">
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Quantity:</strong> ${product.quantity}</p>
                <p><strong>Quality:</strong> Premium Fresh</p>
            </div>
            
            <div class="button-container">
                <button class="btn btn-outline" onclick="addToCart()">Add To Cart</button>
                <button class="btn btn-primary" onclick="buyNow()">Buy Now</button>
                <button class="btn btn-wishlist" onclick="toggleProductWishlist()" id="wishlistBtn">Add to Wishlist</button>
            </div>
        </div>
    `;

    document.getElementById('productName1').textContent = product.name;
    document.getElementById('productName2').textContent = product.name.toLowerCase();
    document.getElementById('productName4').textContent = product.name;
}

function addToCart(){
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);

    if(existing){
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);
}


function buyNow(){
    addToCart();
    window.location.href = "Cart.html";
}

function toggleProductWishlist() {
    const added = toggleWishlist(product);
    updateWishlistBtn();
    

    const btn = document.getElementById('wishlistBtn');
    btn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

function updateWishlistBtn() {
    const btn = document.getElementById('wishlistBtn');
    if (btn) {
        if (isInWishlist(product.id)) {
            btn.innerText = 'Remove from Wishlist';
            btn.style.background = '#ff7043';
        } else {
            btn.innerText = 'Add to Wishlist';
            btn.style.background = '#e57373';
        }
    }
}

setTimeout(updateWishlistBtn, 100);

function showTab(tabName) {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    
    event.target.classList.add('active');
}