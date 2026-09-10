/* ==========================================
   KTR'D WEBSITE CONFIGURATION
   ==========================================
   Edit these values to customise the website.
   Change WhatsApp, email, social links, and
   announcement messages here only.
   ========================================== */

const KTRD_CONFIG = {
    // WhatsApp number in international format without + or spaces
    // Example for South Africa: 27821234567
    whatsapp: "27820000000",

    // Contact email
    email: "hello@ktrd.co.za",

    // Social media usernames / full URLs (without https://)
    instagram: "ktrd",
    facebook: "ktrd",
    tiktok: "ktrd",

    // Announcement banner message (set to empty string "" to hide permanently)
    announcementMessage: "NEW STOCK HAS ARRIVED ✦ Discover the latest curated pieces",

    // Sale banner (set showSaleBanner to false to hide)
    showSaleBanner: true,
    saleBannerMessage: "KTR’D SALE — BEAUTIFUL FINDS, BEAUTIFUL PRICES",
    saleBannerLink: "sale.html"
};

/* ==========================================
   PRODUCT DATABASE
   ==========================================
   HOW TO ADD A PRODUCT:
   1. Copy an existing product object
   2. Change the id to a unique number
   3. Update name, category, price, image path, description
   4. Set isNew: true if it is a new arrival
   5. Set isSale: true and provide salePrice if on sale
   6. Set stock: false if out of stock
   7. Save the file and refresh the website

   CATEGORIES used:
   - Fragrances
   - Eau de Cologne
   - Coiffure
   - Largesse
   - Bijouterie

   Image path example:
   "images/products/perfume-01.jpg"
   ========================================== */

const products = [
    // ===== FRAGRANCES (6 sample products) =====
    {
        id: 1,
        name: "Velvet Amber",
        category: "Fragrances",
        price: 890,
        salePrice: null,
        image: "images/products/perfume-01.jpg",
        description: "A warm, sophisticated blend of amber, vanilla and soft woods. Ideal for evening wear and special occasions.",
        isNew: true,
        isSale: false,
        stock: true,
        gender: "Unisex",
        notes: "Woody, Oriental"
    },
    {
        id: 2,
        name: "Rose Silk",
        category: "Fragrances",
        price: 750,
        salePrice: 620,
        image: "images/products/perfume-02.jpg",
        description: "Delicate rose petals layered with soft musk and a hint of peony. Elegant and feminine.",
        isNew: false,
        isSale: true,
        stock: true,
        gender: "Women",
        notes: "Floral, Sweet"
    },
    {
        id: 3,
        name: "Midnight Cedar",
        category: "Fragrances",
        price: 980,
        salePrice: null,
        image: "images/products/perfume-03.jpg",
        description: "Deep cedarwood, black pepper and smoky incense. A bold, refined scent for the modern gentleman.",
        isNew: true,
        isSale: false,
        stock: true,
        gender: "Men",
        notes: "Woody, Oriental"
    },
    {
        id: 4,
        name: "Citrus Bloom",
        category: "Fragrances",
        price: 680,
        salePrice: null,
        image: "images/products/perfume-04.jpg",
        description: "Bright bergamot, neroli and white flowers. Fresh, uplifting and perfect for daytime.",
        isNew: false,
        isSale: false,
        stock: true,
        gender: "Unisex",
        notes: "Fresh, Floral"
    },
    {
        id: 5,
        name: "Saffron Noir",
        category: "Fragrances",
        price: 1100,
        salePrice: 950,
        image: "images/products/perfume-05.jpg",
        description: "Rich saffron, leather and dark rose. An opulent, memorable fragrance.",
        isNew: false,
        isSale: true,
        stock: true,
        gender: "Unisex",
        notes: "Oriental, Woody"
    },
    {
        id: 6,
        name: "White Peony",
        category: "Fragrances",
        price: 720,
        salePrice: null,
        image: "images/products/perfume-06.jpg",
        description: "Soft peony, lily of the valley and clean musk. Light, romantic and airy.",
        isNew: true,
        isSale: false,
        stock: true,
        gender: "Women",
        notes: "Floral, Fresh"
    },

    // ===== EAU DE COLOGNE (4 sample products) =====
    {
        id: 7,
        name: "Coastal Mist",
        category: "Eau de Cologne",
        price: 450,
        salePrice: null,
        image: "images/products/cologne-01.jpg",
        description: "Crisp sea salt, citrus and light woods. Refreshing and effortlessly clean.",
        isNew: true,
        isSale: false,
        stock: true,
        gender: "Unisex",
        notes: "Fresh"
    },
    {
        id: 8,
        name: "Green Verbena",
        category: "Eau de Cologne",
        price: 420,
        salePrice: 350,
        image: "images/products/cologne-02.jpg",
        description: "Vibrant verbena, lemon and soft herbs. Bright and invigorating.",
        isNew: false,
        isSale: true,
        stock: true,
        gender: "Unisex",
        notes: "Fresh"
    },
    {
        id: 9,
        name: "Neroli Light",
        category: "Eau de Cologne",
        price: 480,
        salePrice: null,
        image: "images/products/cologne-03.jpg",
        description: "Delicate neroli, orange blossom and white musk. Soft and luminous.",
        isNew: false,
        isSale: false,
        stock: true,
        gender: "Women",
        notes: "Floral, Fresh"
    },
    {
        id: 10,
        name: "Cedar Splash",
        category: "Eau de Cologne",
        price: 460,
        salePrice: null,
        image: "images/products/cologne-04.jpg",
        description: "Light cedar, bergamot and a touch of vetiver. Clean and sophisticated.",
        isNew: true,
        isSale: false,
        stock: true,
        gender: "Men",
        notes: "Woody, Fresh"
    },

    // ===== BIJOUTERIE (5 sample products) =====
    {
        id: 11,
        name: "Gold Leaf Hoops",
        category: "Bijouterie",
        price: 320,
        salePrice: null,
        image: "images/products/jewellery-01.jpg",
        description: "Elegant gold-tone hoop earrings with a subtle textured finish. Lightweight and timeless.",
        isNew: true,
        isSale: false,
        stock: true
    },
    {
        id: 12,
        name: "Pearl Drop Necklace",
        category: "Bijouterie",
        price: 480,
        salePrice: 390,
        image: "images/products/jewellery-02.jpg",
        description: "Delicate chain with a single luminous pearl drop. Perfect for everyday elegance.",
        isNew: false,
        isSale: true,
        stock: true
    },
    {
        id: 13,
        name: "Stackable Bangles Set",
        category: "Bijouterie",
        price: 550,
        salePrice: null,
        image: "images/products/jewellery-03.jpg",
        description: "Set of three slender gold-tone bangles. Mix and match for a curated look.",
        isNew: true,
        isSale: false,
        stock: true
    },
    {
        id: 14,
        name: "Minimal Signet Ring",
        category: "Bijouterie",
        price: 280,
        salePrice: null,
        image: "images/products/jewellery-04.jpg",
        description: "Sleek, modern signet ring in polished gold-tone. Understated luxury.",
        isNew: false,
        isSale: false,
        stock: true
    },
    {
        id: 15,
        name: "Crystal Stud Set",
        category: "Bijouterie",
        price: 260,
        salePrice: 210,
        image: "images/products/jewellery-05.jpg",
        description: "Sparkling crystal studs in a classic setting. Ideal for everyday wear or gifts.",
        isNew: false,
        isSale: true,
        stock: true
    },

    // ===== LARGESSE / GIFTING (5 sample products) =====
    {
        id: 16,
        name: "Curated Gift Box — Classic",
        category: "Largesse",
        price: 650,
        salePrice: null,
        image: "images/products/gift-01.jpg",
        description: "A thoughtfully curated gift box featuring a scented candle, mini fragrance and silk ribbon.",
        isNew: true,
        isSale: false,
        stock: true
    },
    {
        id: 17,
        name: "Bridesmaid Gift Set",
        category: "Largesse",
        price: 780,
        salePrice: null,
        image: "images/products/gift-02.jpg",
        description: "Elegant set designed for bridesmaids: jewellery pouch, perfume sample and personalised note.",
        isNew: false,
        isSale: false,
        stock: true
    },
    {
        id: 18,
        name: "Corporate Luxe Box",
        category: "Largesse",
        price: 920,
        salePrice: 850,
        image: "images/products/gift-03.jpg",
        description: "Premium corporate gifting option with refined packaging and selected lifestyle pieces.",
        isNew: false,
        isSale: true,
        stock: true
    },
    {
        id: 19,
        name: "Birthday Celebration Box",
        category: "Largesse",
        price: 590,
        salePrice: null,
        image: "images/products/gift-04.jpg",
        description: "A joyful, beautifully presented birthday gift featuring fragrance and small luxuries.",
        isNew: true,
        isSale: false,
        stock: true
    },
    {
        id: 20,
        name: "Personalised Note & Ribbon Set",
        category: "Largesse",
        price: 180,
        salePrice: null,
        image: "images/products/gift-05.jpg",
        description: "Add a personal touch to any gift with our custom note and luxury ribbon option.",
        isNew: false,
        isSale: false,
        stock: true
    }
];

/* ==========================================
   SHOPPING CART
   ========================================== */

let cart = JSON.parse(localStorage.getItem("ktrd_cart")) || [];

function saveCart() {
    localStorage.setItem("ktrd_cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countEls = document.querySelectorAll(".cart-count");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEls.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? "flex" : "none";
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.stock) {
        alert("This product is currently unavailable.");
        return;
    }

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.salePrice || product.price,
            image: product.image,
            quantity: quantity
        });
    }
    saveCart();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartPage();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity < 1) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    renderCartPage();
}

function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        cart = [];
        saveCart();
        renderCartPage();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

/* ==========================================
   WHATSAPP FUNCTIONS
   ========================================== */

function getWhatsAppLink(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${KTRD_CONFIG.whatsapp}?text=${encoded}`;
}

function enquireProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const msg = `Hello KTR'D, I am interested in ${product.name}.`;
    window.open(getWhatsAppLink(msg), "_blank");
}

function enquireService(serviceName) {
    const msg = `Hello KTR'D, I would like to enquire about your ${serviceName} services.`;
    window.open(getWhatsAppLink(msg), "_blank");
}

function sendCartOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const name = document.getElementById("checkout-name")?.value.trim() || "";
    const email = document.getElementById("checkout-email")?.value.trim() || "";
    const phone = document.getElementById("checkout-phone")?.value.trim() || "";
    const preference = document.getElementById("checkout-preference")?.value || "";
    const address = document.getElementById("checkout-address")?.value.trim() || "";
    const notes = document.getElementById("checkout-notes")?.value.trim() || "";

    if (!name || !phone) {
        alert("Please enter at least your name and phone number.");
        return;
    }

    let message = `Hello KTR'D, I would like to place an order.\n\n`;
    message += `Name: ${name}\n`;
    if (email) message += `Email: ${email}\n`;
    message += `Phone: ${phone}\n`;
    message += `Preference: ${preference}\n`;
    if (address) message += `Address: ${address}\n`;
    message += `\nOrder details:\n`;

    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} — R${(item.price * item.quantity).toFixed(0)}\n`;
    });

    message += `\nTotal: R${getCartTotal().toFixed(0)}\n`;
    if (notes) message += `\nNotes: ${notes}`;

    window.open(getWhatsAppLink(message), "_blank");
}

function sendEnquiry() {
    const name = document.getElementById("contact-name")?.value.trim() || "";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const phone = document.getElementById("contact-phone")?.value.trim() || "";
    const service = document.getElementById("contact-service")?.value || "";
    const date = document.getElementById("contact-date")?.value || "";
    const messageText = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !messageText) {
        alert("Please enter your name and a message.");
        return;
    }

    let msg = `Hello KTR'D, I have an enquiry.\n\n`;
    msg += `Name: ${name}\n`;
    if (email) msg += `Email: ${email}\n`;
    if (phone) msg += `Phone: ${phone}\n`;
    if (service) msg += `Service: ${service}\n`;
    if (date) msg += `Preferred date: ${date}\n`;
    msg += `\nMessage: ${messageText}`;

    window.open(getWhatsAppLink(msg), "_blank");
}

/* ==========================================
   PRODUCT RENDERING & FILTERING
   ========================================== */

function formatPrice(price) {
    return `R${price.toLocaleString("en-ZA")}`;
}

function createProductCard(product) {
    const priceHtml = product.isSale && product.salePrice
        ? `<span class="price-original">${formatPrice(product.price)}</span>
           <span class="price-sale">${formatPrice(product.salePrice)}</span>`
        : `<span class="price">${formatPrice(product.price)}</span>`;

    const badges = [];
    if (product.isNew) badges.push('<span class="badge badge-new">New</span>');
    if (product.isSale) badges.push('<span class="badge badge-sale">Sale</span>');
    if (!product.stock) badges.push('<span class="badge badge-out">Out of Stock</span>');

    return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.salePrice || product.price}">
        <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" loading="lazy"
                 onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%23f5f0eb%22 width=%22400%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23a89f91%22 font-family=%22Georgia,serif%22 font-size=%2218%22 text-anchor=%22middle%22 dy=%22.3em%22%3EKTR%27D%3C/text%3E%3C/svg%3E';">
            <div class="product-badges">${badges.join("")}</div>
            <div class="product-actions">
                <button class="btn-icon" onclick="openProductModal(${product.id})" aria-label="View ${product.name}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                ${product.stock ? `<button class="btn-icon" onclick="addToCart(${product.id})" aria-label="Add ${product.name} to cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                </button>` : ""}
            </div>
        </div>
        <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${priceHtml}</div>
            <p class="product-desc">${product.description.substring(0, 80)}${product.description.length > 80 ? "..." : ""}</p>
            <div class="product-btns">
                <button class="btn btn-outline btn-sm" onclick="openProductModal(${product.id})">View</button>
                ${product.stock
                    ? `<button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>`
                    : `<button class="btn btn-outline btn-sm" disabled>Out of Stock</button>`}
            </div>
        </div>
    </article>`;
}

function renderProducts(productList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!productList || productList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No products found.</p>
                <a href="shop.html" class="btn btn-outline">Browse Shop</a>
            </div>`;
        return;
    }

    container.innerHTML = productList.map(createProductCard).join("");
}

/* ==========================================
   PRODUCT MODAL
   ========================================== */

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let modal = document.getElementById("product-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "product-modal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeProductModal()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="closeProductModal()" aria-label="Close">&times;</button>
                <div class="modal-body" id="modal-body"></div>
            </div>`;
        document.body.appendChild(modal);
    }

    const priceHtml = product.isSale && product.salePrice
        ? `<span class="price-original">${formatPrice(product.price)}</span>
           <span class="price-sale">${formatPrice(product.salePrice)}</span>
           <span class="price-saved">You save ${formatPrice(product.price - product.salePrice)}</span>`
        : `<span class="price">${formatPrice(product.price)}</span>`;

    const related = products
        .filter(p => p.category === product.category && p.id !== product.id && p.stock)
        .slice(0, 4);

    document.getElementById("modal-body").innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}"
                     onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22600%22 viewBox=%220 0 500 600%22%3E%3Crect fill=%22%23f5f0eb%22 width=%22500%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23a89f91%22 font-family=%22Georgia,serif%22 font-size=%2224%22 text-anchor=%22middle%22 dy=%22.3em%22%3EKTR%27D%3C/text%3E%3C/svg%3E';">
            </div>
            <div class="modal-details">
                <p class="product-category">${product.category}</p>
                <h2>${product.name}</h2>
                <div class="product-price">${priceHtml}</div>
                <p class="availability ${product.stock ? "in-stock" : "out-of-stock"}">
                    ${product.stock ? "In Stock" : "Currently Out of Stock"}
                </p>
                <p class="description">${product.description}</p>
                ${product.stock ? `
                <div class="quantity-selector">
                    <label for="modal-qty">Quantity</label>
                    <div class="qty-controls">
                        <button type="button" onclick="changeModalQty(-1)" aria-label="Decrease">−</button>
                        <input type="number" id="modal-qty" value="1" min="1" max="10" readonly>
                        <button type="button" onclick="changeModalQty(1)" aria-label="Increase">+</button>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.id})">Add to Cart</button>
                    <button class="btn btn-outline" onclick="enquireProduct(${product.id})">WhatsApp Enquiry</button>
                </div>` : `
                <div class="modal-actions">
                    <button class="btn btn-outline" onclick="enquireProduct(${product.id})">Enquire via WhatsApp</button>
                </div>`}
            </div>
        </div>
        ${related.length > 0 ? `
        <div class="related-products">
            <h3>You may also like</h3>
            <div class="product-grid related-grid">
                ${related.map(createProductCard).join("")}
            </div>
        </div>` : ""}`;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function changeModalQty(delta) {
    const input = document.getElementById("modal-qty");
    if (!input) return;
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    input.value = val;
}

function addToCartFromModal(productId) {
    const qty = parseInt(document.getElementById("modal-qty")?.value) || 1;
    addToCart(productId, qty);
}

/* ==========================================
   SHOP FILTERING & SORTING
   ========================================== */

function getFilteredProducts() {
    let filtered = [...products];

    // Category filter
    const category = document.getElementById("filter-category")?.value;
    if (category && category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    // Price range
    const minPrice = parseFloat(document.getElementById("filter-min-price")?.value) || 0;
    const maxPrice = parseFloat(document.getElementById("filter-max-price")?.value) || Infinity;
    filtered = filtered.filter(p => {
        const price = p.salePrice || p.price;
        return price >= minPrice && price <= maxPrice;
    });

    // New arrivals
    if (document.getElementById("filter-new")?.checked) {
        filtered = filtered.filter(p => p.isNew);
    }

    // Sale
    if (document.getElementById("filter-sale")?.checked) {
        filtered = filtered.filter(p => p.isSale);
    }

    // Availability
    if (document.getElementById("filter-instock")?.checked) {
        filtered = filtered.filter(p => p.stock);
    }

    // Search
    const search = document.getElementById("shop-search")?.value.toLowerCase().trim();
    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search) ||
            p.category.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
    }

    // Sort
    const sort = document.getElementById("sort-by")?.value || "featured";
    switch (sort) {
        case "newest":
            filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
        case "price-low":
            filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
            break;
        case "price-high":
            filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
            break;
        case "alpha":
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Featured - keep original order, new first
            filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return filtered;
}

function applyShopFilters() {
    const filtered = getFilteredProducts();
    renderProducts(filtered, "shop-products");
    const countEl = document.getElementById("results-count");
    if (countEl) {
        countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;
    }
}

/* ==========================================
   CART PAGE RENDERING
   ========================================== */

function renderCartPage() {
    const container = document.getElementById("cart-items");
    const summary = document.getElementById("cart-summary");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Your cart is empty.</p>
                <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            </div>`;
        if (summary) summary.style.display = "none";
        return;
    }

    if (summary) summary.style.display = "block";

    container.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}"
                     onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22120%22 viewBox=%220 0 100 120%22%3E%3Crect fill=%22%23f5f0eb%22 width=%22100%22 height=%22120%22/%3E%3C/svg%3E';">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="qty-controls">
                    <button type="button" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease">−</button>
                    <span>${item.quantity}</span>
                    <button type="button" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase">+</button>
                </div>
            </div>
            <div class="cart-item-total">
                <p>${formatPrice(item.price * item.quantity)}</p>
                <button class="btn-text" onclick="removeFromCart(${item.id})" aria-label="Remove">Remove</button>
            </div>
        </div>
    `).join("");

    const totalEl = document.getElementById("cart-total");
    if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

/* ==========================================
   GALLERY / CAROUSEL
   ========================================== */

function initGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const track = gallery.querySelector(".gallery-track");
    const slides = gallery.querySelectorAll(".gallery-slide");
    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");
    const dotsContainer = gallery.querySelector(".gallery-dots");

    if (!track || slides.length === 0) return;

    let current = 0;
    let autoplayTimer = null;
    const total = slides.length;

    // Create dots
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < total; i++) {
            const dot = document.createElement("button");
            dot.className = "gallery-dot" + (i === 0 ? " active" : "");
            dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
            dot.addEventListener("click", () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        gallery.querySelectorAll(".gallery-dot").forEach((d, i) => {
            d.classList.toggle("active", i === current);
        });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    if (nextBtn) nextBtn.addEventListener("click", () => { next(); stopAutoplay(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); stopAutoplay(); startAutoplay(); });

    // Touch support
    let startX = 0;
    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    track.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else prev();
        }
        startAutoplay();
    }, { passive: true });

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(next, 5000);
    }

    function stopAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
    }

    // Pause on hover
    gallery.addEventListener("mouseenter", stopAutoplay);
    gallery.addEventListener("mouseleave", startAutoplay);

    startAutoplay();
}

/* ==========================================
   ANNOUNCEMENT BANNER
   ========================================== */

function initAnnouncement() {
    const banner = document.getElementById("announcement-banner");
    if (!banner) return;

    if (!KTRD_CONFIG.announcementMessage) {
        banner.style.display = "none";
        return;
    }

    const closed = localStorage.getItem("ktrd_announcement_closed");
    if (closed === "true") {
        banner.style.display = "none";
        return;
    }

    banner.querySelector(".announcement-text").textContent = KTRD_CONFIG.announcementMessage;
    banner.style.display = "block";

    const closeBtn = banner.querySelector(".announcement-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            banner.style.display = "none";
            localStorage.setItem("ktrd_announcement_closed", "true");
        });
    }
}

function initSaleBanner() {
    const banner = document.getElementById("sale-banner");
    if (!banner) return;
    if (!KTRD_CONFIG.showSaleBanner) {
        banner.style.display = "none";
        return;
    }
    banner.style.display = "block";
}

/* ==========================================
   MOBILE MENU
   ========================================== */

function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    const overlay = document.querySelector(".nav-overlay");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
        if (overlay) overlay.classList.toggle("open", isOpen);
    });

    if (overlay) {
        overlay.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("nav-open");
            overlay.classList.remove("open");
        });
    }

    // Close on link click (mobile)
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("nav-open");
                if (overlay) overlay.classList.remove("open");
            }
        });
    });
}

/* ==========================================
   SEARCH OVERLAY
   ========================================== */

function initSearch() {
    const searchToggle = document.querySelector(".search-toggle");
    const searchOverlay = document.getElementById("search-overlay");
    const searchInput = document.getElementById("global-search");
    const searchResults = document.getElementById("search-results");
    const closeSearch = document.querySelector(".search-close");

    if (!searchToggle || !searchOverlay) return;

    searchToggle.addEventListener("click", () => {
        searchOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
        setTimeout(() => searchInput?.focus(), 100);
    });

    function closeSearchOverlay() {
        searchOverlay.classList.remove("open");
        document.body.style.overflow = "";
        if (searchInput) searchInput.value = "";
        if (searchResults) searchResults.innerHTML = "";
    }

    if (closeSearch) closeSearch.addEventListener("click", closeSearchOverlay);
    searchOverlay.addEventListener("click", e => {
        if (e.target === searchOverlay) closeSearchOverlay();
    });

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const q = searchInput.value.toLowerCase().trim();
            if (!q) {
                searchResults.innerHTML = "";
                return;
            }
            const matches = products.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            ).slice(0, 8);

            if (matches.length === 0) {
                searchResults.innerHTML = `<p class="no-results">No results found for “${q}”</p>`;
                return;
            }

            searchResults.innerHTML = matches.map(p => `
                <a href="shop.html" class="search-result-item" onclick="sessionStorage.setItem('ktrd_search','${p.name}'); closeSearchOverlay();">
                    <img src="${p.image}" alt="" onerror="this.style.display='none'">
                    <div>
                        <strong>${p.name}</strong>
                        <span>${p.category} · ${formatPrice(p.salePrice || p.price)}</span>
                    </div>
                </a>
            `).join("");
        });
    }
}

/* ==========================================
   SMOOTH SCROLL & FADE-IN
   ========================================== */

function initAnimations() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

/* ==========================================
   PAGE INITIALISATION
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Config-driven elements
    updateCartCount();
    initAnnouncement();
    initSaleBanner();
    initMobileMenu();
    initSearch();
    initAnimations();

    // Update social links from config
    document.querySelectorAll("[data-instagram]").forEach(el => {
        el.href = `https://instagram.com/${KTRD_CONFIG.instagram}`;
        el.textContent = `@${KTRD_CONFIG.instagram}`;
    });
    document.querySelectorAll("[data-facebook]").forEach(el => {
        el.href = `https://facebook.com/${KTRD_CONFIG.facebook}`;
    });
    document.querySelectorAll("[data-tiktok]").forEach(el => {
        el.href = `https://tiktok.com/@${KTRD_CONFIG.tiktok}`;
    });
    document.querySelectorAll("[data-email]").forEach(el => {
        el.href = `mailto:${KTRD_CONFIG.email}`;
        if (el.tagName === "SPAN" || el.classList.contains("email-text")) {
            el.textContent = KTRD_CONFIG.email;
        }
    });
    document.querySelectorAll("[data-whatsapp]").forEach(el => {
        el.href = getWhatsAppLink("Hello KTR'D, I would like to get in touch.");
    });

    // Page-specific
    const path = window.location.pathname;

    if (document.getElementById("shop-products")) {
        // Shop page
        applyShopFilters();
        ["filter-category", "filter-min-price", "filter-max-price", "filter-new", "filter-sale", "filter-instock", "sort-by", "shop-search"]
            .forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener("change", applyShopFilters);
                    el.addEventListener("input", applyShopFilters);
                }
            });
    }

    if (document.getElementById("new-arrivals-products")) {
        const newProducts = products.filter(p => p.isNew);
        renderProducts(newProducts, "new-arrivals-products");
    }

    if (document.getElementById("sale-products")) {
        const saleProducts = products.filter(p => p.isSale);
        renderProducts(saleProducts, "sale-products");
    }

    if (document.getElementById("fragrances-products")) {
        const frag = products.filter(p => p.category === "Fragrances");
        renderProducts(frag, "fragrances-products");

        // Gender / note filters for fragrances
        document.querySelectorAll(".frag-filter").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".frag-filter").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                const filter = btn.dataset.filter;
                let list = products.filter(p => p.category === "Fragrances");
                if (filter !== "all") {
                    list = list.filter(p =>
                        (p.gender && p.gender.toLowerCase() === filter) ||
                        (p.notes && p.notes.toLowerCase().includes(filter))
                    );
                }
                renderProducts(list.length ? list : [], "fragrances-products");
                if (list.length === 0) {
                    document.getElementById("fragrances-products").innerHTML = `
                        <div class="empty-state coming-soon">
                            <p>Coming Soon</p>
                            <span>We’re curating beautiful pieces for this collection.</span>
                        </div>`;
                }
            });
        });
    }

    if (document.getElementById("cologne-products")) {
        renderProducts(products.filter(p => p.category === "Eau de Cologne"), "cologne-products");
    }

    if (document.getElementById("jewellery-products")) {
        renderProducts(products.filter(p => p.category === "Bijouterie"), "jewellery-products");
    }

    if (document.getElementById("gifting-products")) {
        renderProducts(products.filter(p => p.category === "Largesse"), "gifting-products");
    }

    if (document.getElementById("cart-items")) {
        renderCartPage();
    }

    // Galleries
    document.querySelectorAll(".gallery").forEach(g => initGallery(g.id));

    // Close modal on Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeProductModal();
    });
});
