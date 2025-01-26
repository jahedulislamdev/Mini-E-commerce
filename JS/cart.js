let ShoppingBagCounter = document.querySelectorAll(".ShoppingBagCounter");
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
