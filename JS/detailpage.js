document.addEventListener("DOMContentLoaded", () => {
    // Image gallery functionality for product detail page
    let displayImg = document.getElementById("displayImg");
    let paginationImg = document.querySelectorAll(".pagination-img");

    paginationImg.forEach((img) => {
        img.onclick = () => {
            displayImg.classList.add("fade");
            setTimeout(() => {
                displayImg.src = img.src;
                displayImg.classList.remove("fade");
            }, 300);
        };
    });

    // Quantity increment and decrement functionality
    const addToCartBtn = document.getElementById("addToCartMain");
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");
    const quantity = document.getElementById("quantity");

    let totalProduct = 1;
    quantity.innerText = totalProduct;

    increment.addEventListener("click", () => {
        totalProduct++;
        quantity.innerText = totalProduct;
    });

    decrement.addEventListener("click", () => {
        if (totalProduct > 1) {
            totalProduct--;
            quantity.innerText = totalProduct;
        }
    });

    addToCartBtn.addEventListener("click", () => {
        const productName = document.querySelector(".product-title").innerText;
        const price = parseFloat(
            document.querySelector(".product-price").innerText.replace("$", ""),
        );

        // Get the current quantity
        const currentQuantity = parseInt(quantity.innerText);

        if (window.addToCart) {
            window.addToCart(productName, price, currentQuantity);
            alert(` Added ${currentQuantity} items to cart!`);
        } else {
            console.error("addToCart function not found.");
        }
    });
});
