//save data to LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Observe when the DOM is modified
const observeDOMChanges = () => {
    const observer = new MutationObserver(() => {
        const ShoppingBagCounter = document.querySelectorAll(".count-item");
        const cartDiv = document.getElementById("addedProducts");
        let subTotal = document.getElementById("subTotal");

        if (ShoppingBagCounter.length > 0 && cartDiv) {
            console.log(
                "Elements found:",
                ShoppingBagCounter,
                cartDiv,
                subTotal,
            );
            observer.disconnect();
            initCart();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

// Initialize cart functionality
const initCart = () => {
    const ShoppingBagCounter = document.querySelectorAll(".count-item");

    // Cart Counter
    const updateCartCounter = () => {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        ShoppingBagCounter.forEach((el) => {
            el.textContent = totalItems;
        });
    };

    // Update Local Storage
    const saveCartToLocalStorage = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    //  Add to Cart
    const addToCart = (productName, price) => {
        console.log("clicked");
        const existItem = cart.find((i) => i.productName === productName);
        if (existItem) {
            existItem.quantity++;
        } else {
            cart.push({ productName, price, quantity: 1 });
        }
        updateCart();
    };

    // Update Quantity
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

    // Remove from Cart by Index
    const removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    // Calculate Price
    let discountRate = 0;
    let shippingFee = 0;
    let subTotalPrice = document.getElementById("subTotal");
    const calculatePrice = () => {
        let subtotal = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
        // subTotalPrice = subtotal;

        let discount = subtotal * discountRate;
        let total = subtotal - discount + shippingFee;

        const subtotalEl = document.getElementById("subTotal");
        const totalEl = document.getElementById("total");

        if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
        if (totalEl) totalEl.textContent = total.toFixed(2);
    };

    // Update Cart UI
    const cartDiv = document.getElementById("addedProducts");
    const updateCart = () => {
        updateCartCounter();
        calculatePrice();
        saveCartToLocalStorage();
        console.log(cart);
        cartDiv.innerHTML = "";

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.productName} ($${item.price})</span>
                <div>
                    <button class="btn btn-sm btn-danger btn-decrease">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-success btn-increase">+</button>
                    <button class="btn btn-sm btn-warning btn-remove">Remove</button>
                </div>
            `;

            // Add event listeners dynamically
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

    // Make functions globally accessible ***** (Rip)
    window.addToCart = addToCart;
};

// Start observing changes
observeDOMChanges();
