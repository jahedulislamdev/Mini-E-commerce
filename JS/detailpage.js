//display image changing function
let displayImg = document.getElementById("displayImg");
let paginationImg = document.querySelectorAll(".pagination-img");
paginationImg.forEach((img) => {
    img.onclick = () => {
        displayImg.src = img.src;
    };
});
//increment or decriment quantity of product
let incrementQuantity = document.getElementById("incrementQuantity");
let decrementQuantity = document.getElementById("decrementQuantity");
let quantityFigure = document.getElementById("quantityFigure");
let initialQuantity = 0;
incrementQuantity.addEventListener("click", () => {
    initialQuantity++;
    quantityFigure.innerText = initialQuantity;
});
decrementQuantity.addEventListener("click", () => {
    if (initialQuantity > 0) {
        initialQuantity--;
        quantityFigure.innerText = initialQuantity;
    }
});
