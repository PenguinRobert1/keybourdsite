// Simple product data for demo
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
    },
    {
        id: 4,
        name: "Mouse Pads",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&q=80"
    },
    {
        id: 5,
        name: "Nintendo Controller",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80"
    }
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}">
            <h3>${prod.name}</h3>
            <div class="price">$${prod.price.toFixed(2)}</div>
            <button class="btn" onclick="addToCart(${prod.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ ...prod, qty: 1 });
    }
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((a, b) => a + b.qty, 0);
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>$${(item.price * item.qty).toFixed(2)} <button onclick="removeFromCart(${item.id})" style="margin-left:8px;color:#f09d51;border:none;background:none;cursor:pointer;">Remove</button></span>
        `;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    renderCart();
}

document.getElementById('cartBtn').addEventListener('click', () => {
    renderCart();
    document.getElementById('cartModal').classList.add('active');
});
document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartModal').classList.remove('active');
});
document.getElementById('checkoutBtn').addEventListener('click', () => {
    alert('Checkout is a demo only!');
    cart = [];
    updateCartCount();
    renderCart();
    document.getElementById('cartModal').classList.remove('active');
});

// Initial rendering
renderProducts();
updateCartCount();