// Initialize cart functionality
const initCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // localstorage
    const ShoppingBagCounter = document.querySelectorAll(".count-item");
    const cartDiv = document.getElementById("addedProducts");
    const subtotalElement = document.getElementById("subTotal");
    const totalElement = document.getElementById("total");

    if (!cartDiv || !subtotalElement || !totalElement) {
        console.warn("Cart elements not found, waiting..."); // add loading spinner if you want.
        return;
    }

    // console.log("Cart initialized successfully!");

    // Update instand cart counter
    const updateCartCounter = () => {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        ShoppingBagCounter.forEach((el) => (el.textContent = totalItems));
    };

    // Save cart to LocalStorage
    const saveCartToLocalStorage = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    // Calculate total price
    const calculatePrice = () => {
        let subtotal = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
        let total = subtotal; // Shipping or discount logic can be added

        subtotalElement.textContent = subtotal.toFixed(2);
        totalElement.textContent = total.toFixed(2);
    };

    // Add to cart function
    const addToCart = (productName, price) => {
        const existItem = cart.find((i) => i.productName === productName);
        if (existItem) {
            existItem.quantity++;
        } else {
            cart.push({ productName, price, quantity: 1 });
        }
        updateCart();
    };

    // Update quantity function
    const updateQuantity = (index, change) => {
        if (index >= 0 && index < cart.length) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                updateCart();
            }
        }
    };

    // Remove from cart
    const removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    // Update cart UI
    const updateCart = () => {
        updateCartCounter();
        calculatePrice();
        saveCartToLocalStorage();

        cartDiv.innerHTML = "";

        if (cart.length === 0) {
            cartDiv.innerHTML = `<p class="text-center text-muted">Your cart is empty</p>`;
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add(
                "cart-item",
                "d-flex",
                "bg-secondary-subtle",
                "justify-content-between",
                "align-items-center",
                "mb-2",
                "p-2",
                "rounded-2",
                "border",
            );

            cartItem.innerHTML = `
                <span >${item.productName} ($${item.price})</span>
                <div>
                <div class="btn-group ms-1" role="group" aria-label="Basic outlined example">
                    <button class="btn btn-sm btn-outline-secondary btn-decrease">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-success rounded-end btn-increase me-2">+</button>
                    <button class="btn btn-sm btn-warning btn-remove rounded-1">Remove</button>
                    </div>
                    
                </div>
            `;

            cartItem
                .querySelector(".btn-decrease")
                .addEventListener("click", () => updateQuantity(index, -1));
            cartItem
                .querySelector(".btn-increase")
                .addEventListener("click", () => updateQuantity(index, 1));
            cartItem
                .querySelector(".btn-remove")
                .addEventListener("click", () => removeFromCart(index));

            cartDiv.appendChild(cartItem);
        });
    };

    updateCart();
    window.addToCart = addToCart;
};

// Observe changes in the cart offcanvas
const observeCartChanges = () => {
    const observer = new MutationObserver(() => {
        const cartDiv = document.getElementById("addedProducts");
        if (cartDiv) {
            // console.log("Cart offcanvas detected, initializing cart...");
            observer.disconnect();
            initCart();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

// Start observing cart changes when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    observeCartChanges();
});
