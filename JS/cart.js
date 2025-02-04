//------------------------------------------------{temporary}-----------------------------------------------//
//increse quantity {counter function}
/*let ShoppingBagCounter = document.querySelectorAll(".ShoppingBagCounter");
let AddToCartButton = document.querySelectorAll(".AddToCart");

let initialQuantityOfProduct = 0;
AddToCartButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        initialQuantityOfProduct++;
        ShoppingBagCounter.forEach((num) => {
            num.innerHTML = initialQuantityOfProduct;
        });
    });
});
// Handle the removal of products from the table
document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        row.remove();
    });
});
//------------------------------------------------{temporary}-----------------------------------------------//
*/
// cart data stractue
let cart = [];
// Add to cart
const addToCart = (productName, price) => {
    const existItem = cart.find((i) => i.name === productName);
    if (existItem) {
        existItem.quantity++;
    } else [cart.push({ name: productName, quantity: 1, price })];
};
// Remove from cart
const removeFromCart = (productName) => {
    updateCart = cart.filter((item) => item.name !== productName);
};
// Increment quantity
const incrementQuantity = (productName) => {
    const isMatch = cart.find((i) => i.name === productName);
    if (isMatch) {
        isMatch.quantity++;
    }
};
// decrement quantity
const decrementQuantity = (productName) => {
    const isMatch = cart.find((i) => i.name === productName);
    if (isMatch && isMatch.quantity > 1) {
        isMatch.quantity--;
    } else {
        removeFromCart(productName);
    }
};
// calculate price
let discountRate = 0;
let shippingFee = 0;
const calculatePrice = () => {
    let subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    let discount = subtotal * discountRate;
    let total = subtotal - discount + shippingFee;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("discount").textContent = discountRate.toFixed(2);
};

// Apply copun code
// update cart display
