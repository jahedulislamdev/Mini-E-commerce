const ProductsData = [
    {
        id: 1,
        productName: "Wireless Earbuds",
        category: "Electronics",
        price: 300,
        description:
            "Compact and ergonomic earbuds with superior sound quality and noise cancellation.",
        brandName: "SoundTech",
        productImg:
            "https://images.unsplash.com/photo-1603694681044-e71c5993d6cd?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 2,
        productName: "Running Shoes",
        category: "Footwear",
        price: 540,
        description:
            "Lightweight running shoes with breathable material and comfortable cushioning.",
        brandName: "StridePro",
        productImg:
            "https://images.unsplash.com/photo-1620856902651-ce18d6d31d42?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 3,
        productName: "Smartwatch",
        category: "Wearables",
        price: 680,
        description:
            "Feature-packed smartwatch with fitness tracking, notifications, and long battery life.",
        brandName: "TechGear",
        productImg:
            "https://plus.unsplash.com/premium_photo-1683120889995-b6a309252981?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 4,
        productName: "Gaming Laptop",
        category: "Computers",
        price: 340,
        description:
            "High-performance laptop with powerful graphics card, fast processor, and RGB keyboard.",
        brandName: "GameCore",
        productImg:
            "https://plus.unsplash.com/premium_photo-1661304671477-37c77d0c6930?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 5,
        productName: "Blender",
        category: "Home Appliances",
        price: 700,
        description:
            "Efficient blender with multiple speed settings, ideal for smoothies and soups.",
        brandName: "KitchenAid",
        productImg:
            "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 6,
        productName: "Smart TV",
        category: "Electronics",
        price: 1200,
        description:
            "Ultra HD smart TV with built-in streaming apps and voice control.",
        brandName: "VisionView",
        productImg:
            "https://images.unsplash.com/photo-1604594849809-d4e05679d4b0?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 7,
        productName: "Yoga Mat",
        category: "Fitness",
        price: 50,
        description:
            "Non-slip yoga mat with durable material and easy-to-clean surface.",
        brandName: "FlexFit",
        productImg:
            "https://images.unsplash.com/photo-1599058917760-d1819ac44d1e?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 8,
        productName: "Coffee Maker",
        category: "Home Appliances",
        price: 200,
        description:
            "Automatic coffee maker with programmable settings and thermal carafe.",
        brandName: "BrewMaster",
        productImg:
            "https://images.unsplash.com/photo-1513896727217-8b6f5b060202?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 9,
        productName: "Fitness Tracker",
        category: "Wearables",
        price: 150,
        description:
            "Track your steps, heart rate, and calories with this lightweight tracker.",
        brandName: "TrackFit",
        productImg:
            "https://images.unsplash.com/photo-1565078513764-16e8c8c8e034?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 10,
        productName: "Office Chair",
        category: "Furniture",
        price: 400,
        description:
            "Ergonomic office chair with lumbar support and adjustable height.",
        brandName: "ComfortWork",
        productImg:
            "https://images.unsplash.com/photo-1519566335946-7d7a7a1e5f3b?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 11,
        productName: "Air Purifier",
        category: "Home Appliances",
        price: 300,
        description:
            "HEPA air purifier for clean and allergen-free air at home.",
        brandName: "PureAir",
        productImg:
            "https://images.unsplash.com/photo-1600195077902-c96a5d48f9a3?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 12,
        productName: "Digital Camera",
        category: "Photography",
        price: 1500,
        description:
            "High-resolution camera with interchangeable lenses and 4K video recording.",
        brandName: "ShutterPro",
        productImg:
            "https://images.unsplash.com/photo-1543149473-0c411ed34c9e?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 13,
        productName: "Wireless Speaker",
        category: "Electronics",
        price: 180,
        description:
            "Portable wireless speaker with excellent sound and long battery life.",
        brandName: "BeatWave",
        productImg:
            "https://images.unsplash.com/photo-1602251557456-cd6c3c493312?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 14,
        productName: "Desk Lamp",
        category: "Lighting",
        price: 70,
        description:
            "LED desk lamp with adjustable brightness and USB charging port.",
        brandName: "BrightLite",
        productImg:
            "https://images.unsplash.com/photo-1598300051229-d1e4d27d57c6?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 15,
        productName: "Electric Kettle",
        category: "Kitchen",
        price: 90,
        description:
            "Fast-boiling electric kettle with auto shut-off and stainless steel design.",
        brandName: "HotBrew",
        productImg:
            "https://images.unsplash.com/photo-1517256064527-09c73fc73c82?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 16,
        productName: "Backpack",
        category: "Accessories",
        price: 110,
        description:
            "Durable and spacious backpack, perfect for travel or daily use.",
        brandName: "CarryMore",
        productImg:
            "https://images.unsplash.com/photo-1507608869273-d159362ccab5?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 17,
        productName: "Table Fan",
        category: "Home Appliances",
        price: 80,
        description: "Compact table fan with oscillation and speed controls.",
        brandName: "CoolBreeze",
        productImg:
            "https://images.unsplash.com/photo-1599742403522-34a83aa64e9c?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 18,
        productName: "Action Camera",
        category: "Photography",
        price: 400,
        description:
            "Rugged and waterproof action camera with ultra-wide lens.",
        brandName: "AdventureCam",
        productImg:
            "https://images.unsplash.com/photo-1516728778615-2d590ea1856d?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 19,
        productName: "Wireless Keyboard",
        category: "Computers",
        price: 70,
        description:
            "Compact wireless keyboard with comfortable keys and long battery life.",
        brandName: "KeyFlow",
        productImg:
            "https://images.unsplash.com/photo-1547384760-7c89d7e993a1?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 20,
        productName: "Noise Cancelling Headphones",
        category: "Electronics",
        price: 250,
        description:
            "Premium headphones with active noise cancellation and rich audio.",
        brandName: "SilenceAudio",
        productImg:
            "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&auto=format&fit=crop&q=60",
    },
];

const categoryContainer = document.getElementById("categoryContainer");
const productList = document.getElementById("productList");

const displayProducts = (products) => {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add(
            "col-lg-3",
            "col-md-4",
            "col-sm-6",
            "col-12",
            "mb-4",
        );
        productCard.innerHTML = `
                   <div class="card mb-2">
                       <div>
                           <img src="${
                               product.productImg ? product.productImg : ""
                           }" class="w-100 card-img-top card-image" />
                       </div>
                       <div class="card-body">
                           <h5 class="card-title mb-1">${
                               product.productName
                           }</h5>
                           <p class="fw-light text-sm mb-1">${
                               product.category
                           }</p>
                           <h6 class="mb-1">$${product.price}</h6>
                       </div>
                       <div class="card-footer d-flex justify-content-center text-muted">
                           <a href="/pages/product_detail.html?id=${
                               product.id
                           }" role="button" class="productDetail me-4 btn rounded-1 btn-outline-success">Details</a>
                           <a onclick="handleCart(${
                               product.id
                           })" href="#" role="button" class="AddToCart btn rounded-1 btn-outline-danger">Add to Cart</a>
                       </div>
                   </div>
       `;
        productList.appendChild(productCard);
    });
};

// Create all category button and handle category
const displayPostsByCategory = () => {
    const categories = ["All", ...new Set(ProductsData.map((c) => c.category))];

    categories.forEach((category) => {
        const categoryButton = document.createElement("button");
        categoryButton.textContent = category;
        categoryButton.classList.add("category-btn");

        // Handle category
        categoryButton.addEventListener("click", () => {
            // Remove "active" class from all buttons
            document
                .querySelectorAll(".category-btn")
                .forEach((btn) => btn.classList.remove("active"));

            // Add "active" class to the clicked button
            categoryButton.classList.add("active");

            // Filter products by category
            const filteredProducts =
                category === "All"
                    ? ProductsData
                    : ProductsData.filter((item) => item.category === category);
            displayProducts(filteredProducts);
        });

        categoryContainer.appendChild(categoryButton);
    });

    // Display all products initially
    displayProducts(ProductsData);
};

displayPostsByCategory();
