// Load components dynamically
const loadComponents = (id, fileName, callback) => {
    fetch(fileName)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        })
        .catch((err) => console.error("Loading failed: " + fileName, err));
};

document.addEventListener("DOMContentLoaded", () => {
    loadComponents("header", "components/navbar.html", highlightActiveLink);
    loadComponents("footer", "components/footer.html");
});

// Highlight active nav link
const highlightActiveLink = () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        let linkPath = link.getAttribute("href");

        // Get only the last part of the path (basename)
        let Pagelink = linkPath.split("/").pop();
        if (Pagelink === currentPage) {
            link.classList.add("active");
            // console.log("Active link found:", Pagelink);
        }
    });
};
