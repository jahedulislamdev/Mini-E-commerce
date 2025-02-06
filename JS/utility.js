// dynamically load components (navbar, footer, offcanvas)

let basePath = window.location.pathname.includes("/pages/") ? "../" : "";
const loadComponents = (id, fileName, callback) => {
    // Adjust the path based on the current page's directory

    // Fetch the HTML component and insert it into the specified ID
    fetch(basePath + fileName)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        })
        .catch((err) => console.error("Loading failed: " + fileName, err));
};

// Automatically load the components when the page is ready
document.addEventListener("DOMContentLoaded", () => {
    loadComponents("header", "components/navbar.html", highlightActiveLink);
    loadComponents("footer", "components/footer.html");
    loadComponents("mobileCartOffcanvas", "/pages/cart.html");
    loadComponents("desktopCartOffcanvas", "/pages/cart.html");
});

// Function to load cart offcanvas when cart button is clicked

// Highlight the active navigation link based on the current page
const highlightActiveLink = () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        let linkPath = link.getAttribute("href");
        let pageLink = linkPath.split("/").pop();

        if (pageLink === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};
