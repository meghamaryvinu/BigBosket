function displayCart(){
    const cart = getCart();
    let cartHTML = "";
    let total = 0;
    const confirmBtn = document.getElementById("confirmOrderBtn");
    
    if (cart.length === 0) {
        document.getElementById("cartItems").innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #666;">
                <h2 style="color: #0c3321; margin-bottom: 20px;">Your cart is empty</h2>
                <p style="font-size: 1.1rem; margin-bottom: 30px;">Add some delicious items to get started!</p>
                <a href="products.html" style="background: #1f4d3c; color: white; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-size: 16px;">Start Shopping</a>
            </div>
        `;
        document.getElementById("totalBill").innerText = "";
        if (confirmBtn) confirmBtn.style.display = "none";
        return;
    }
    
    cart.forEach((product,index)=>{
        // If quantity doesn't exist, set to 1
        if(!product.quantity){
            product.quantity = 1;
        }

        total += product.price * product.quantity;

        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-left">
                    <img
                        src="${product.image}"
                        width="100"
                        alt="${product.name}"
                    >
                    <div>
                        <h3>${product.name}</h3>
                        <p>₹${product.price}</p>
                    </div>
                </div>
                <div class="cart-item-right">
                    <button onclick="decreaseQty(${index})">
                        -
                    </button>
                    <span style="
                        margin:0 10px;
                        font-weight:bold;
                    ">
                        ${product.quantity}
                    </span>
                    <button onclick="increaseQty(${index})">
                        +
                    </button>
                </div>
            </div>
        `;
    });
    
    document.getElementById("cartItems").innerHTML = cartHTML;
    document.getElementById("totalBill").innerText = "Total: ₹" + total;
    if (confirmBtn) confirmBtn.style.display = "block";
    saveCart(cart);
}

function increaseQty(index){
    const cart = getCart();
    cart[index].quantity++;
    saveCart(cart);
    displayCart();
}

function decreaseQty(index){
    const cart = getCart();
    cart[index].quantity--;
    if(cart[index].quantity <= 0){
        cart.splice(index,1);
    }
    saveCart(cart);
    displayCart();
}

function confirmOrder(){
    localStorage.removeItem("cart");
    updateGlobalCartCount();
    window.location.href = "order-success.html";
}

displayCart();