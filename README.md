# KTR’D Website

A complete, professional, luxury e-commerce and catalogue website for **KTR’D** — a South African lifestyle and catering brand focused on elegance, gifting, beauty, experiences and curated lifestyle services.

Built with pure **HTML5**, **CSS3** and **Vanilla JavaScript**. No React, no build tools, no backend. Ready for **GitHub Pages**.

---

## Technologies

- HTML5 (semantic, accessible)
- CSS3 (custom properties, responsive, mobile-first)
- Vanilla JavaScript (cart, filters, search, WhatsApp, localStorage)
- Google Fonts (Cormorant Garamond + Montserrat)

---

## Folder Structure

```
KTRD/
├── index.html              # Homepage
├── shop.html               # Product catalogue with filters
├── new-arrivals.html       # Products marked isNew: true
├── sale.html               # Products marked isSale: true
├── services.html           # Overview of services
├── fragrances.html         # Fragrance products + filters
├── eau-de-cologne.html     # Eau de Cologne products
├── coiffure.html           # Coiffure services
├── weddings.html           # Wedding packages + gallery
├── picnics.html            # Picnic packages
├── largesse.html           # Gifting products
├── bijouterie.html         # Jewellery products
├── about.html              # About the brand
├── contact.html            # Contact / enquiry form
├── cart.html               # Shopping cart + WhatsApp order
│
├── css/
│   └── style.css           # All styles
│
├── js/
│   └── script.js           # Config, products, cart, filters, WhatsApp
│
├── images/
│   ├── hero/               # Homepage hero image
│   ├── products/           # Product photos
│   ├── weddings/           # Wedding images + gallery
│   ├── picnics/            # Picnic images
│   ├── coiffure/           # Coiffure service images
│   ├── gifting/            # Gift images
│   ├── jewellery/          # Jewellery images
│   ├── gallery/            # Instagram-style grid images
│   └── favicon.png         # Favicon
│
└── README.md
```

---

## How to Add Images

1. Place your image files in the correct folder under `images/`.
2. Use clear filenames, for example:
   - `images/hero/hero-main.jpg`
   - `images/products/perfume-01.jpg`
   - `images/weddings/wedding-01.jpg`
3. Recommended sizes:
   - Hero: 1920×1080 or larger
   - Product cards: 800×1000 (portrait)
   - Gallery: 1200×675
4. Formats: JPG or WebP preferred.
5. The website already has graceful fallbacks — if an image is missing you will see a soft cream placeholder with “KTR’D” instead of a broken image icon.

Update the `image` path inside each product object in `js/script.js` to match the filename you uploaded.

---

## How to Add / Edit Products

Open `js/script.js` and find the section:

```js
// ==========================================
// PRODUCT DATABASE
// ==========================================
```

Each product looks like this:

```js
{
    id: 1,                          // Unique number
    name: "Velvet Amber",
    category: "Fragrances",         // Fragrances | Eau de Cologne | Bijouterie | Largesse
    price: 890,
    salePrice: null,                // or a number if on sale
    image: "images/products/perfume-01.jpg",
    description: "A warm, sophisticated blend...",
    isNew: true,                    // true = shows on New Arrivals
    isSale: false,                  // true = shows on Sale page
    stock: true,                    // false = Out of Stock
    gender: "Unisex",               // optional, for fragrance filters
    notes: "Woody, Oriental"        // optional, for fragrance filters
}
```

**To add a product:**
1. Copy an existing product object.
2. Give it a new unique `id`.
3. Update name, category, price, image path, description.
4. Set `isNew: true` if it should appear under New Arrivals.
5. Set `isSale: true` and provide `salePrice` if it is on sale.
6. Set `stock: false` if it is out of stock.
7. Save the file and refresh the website.

---

## How to Change Prices

Edit the `price` and (if needed) `salePrice` values in the product objects inside `js/script.js`. Prices are displayed in South African Rand (R).

---

## How to Change WhatsApp Number

At the top of `js/script.js`:

```js
const KTRD_CONFIG = {
    whatsapp: "27820000000",   // ← change this (international format, no + or spaces)
    ...
};
```

Example for a South African number: `27821234567`.

Every enquiry and order button uses this number automatically.

---

## How to Change Email & Social Links

Still in `KTRD_CONFIG` at the top of `js/script.js`:

```js
email: "hello@ktrd.co.za",
instagram: "ktrd",
facebook: "ktrd",
tiktok: "ktrd"
```

Change the values once — the rest of the site updates automatically.

---

## How to Update New Arrivals / Sale

- New Arrivals page shows any product where `isNew: true`.
- Sale page shows any product where `isSale: true` (and displays the `salePrice`).

Simply edit the product objects in `js/script.js`.

---

## Announcement & Sale Banners

Also in `KTRD_CONFIG`:

```js
announcementMessage: "NEW STOCK HAS ARRIVED ✦ Discover the latest curated pieces",
showSaleBanner: true,
saleBannerMessage: "KTR’D SALE — BEAUTIFUL FINDS, BEAUTIFUL PRICES",
```

- Set `announcementMessage` to `""` to hide the top announcement permanently.
- Set `showSaleBanner` to `false` to hide the sale banner.
- The announcement banner is dismissible and remembers the choice via localStorage.

---

## How to Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `ktrd-website`).
2. Upload all files and folders exactly as they appear in this project (keep the structure).
3. Go to **Settings → Pages**.
4. Under **Source**, select the branch `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.
6. Wait a minute or two. Your site will be live at:
   `https://YOUR-USERNAME.github.io/ktrd-website/`
7. (Optional) Later connect a custom domain such as `ktrd.co.za` (see below).

**Important:** All paths are relative, so the site works correctly on GitHub Pages with no changes.

---

## Connecting a Custom Domain (e.g. ktrd.co.za)

1. In GitHub Pages settings, enter your domain under **Custom domain** and save.
2. GitHub will show the required DNS records.
3. Log in to your domain registrar (where you bought the domain) and add:
   - **A records** pointing to GitHub’s IPs (GitHub publishes the current list), **or**
   - A **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`.
4. For the apex domain (`ktrd.co.za`) most registrars also need A records.
5. Enable **Enforce HTTPS** in GitHub Pages settings once the domain is verified.
6. DNS changes can take a few minutes to 48 hours to propagate.

---

## Customisation Quick Reference

| What to change              | Where                                      |
|----------------------------|--------------------------------------------|
| Logo text                  | Every HTML file (class `logo`)             |
| Colours                    | `css/style.css` → `:root` variables        |
| Fonts                      | Google Fonts link in HTML + CSS variables  |
| Products / prices          | `js/script.js` → `products` array          |
| WhatsApp / email / social  | `js/script.js` → `KTRD_CONFIG`             |
| Announcement / sale banner | `js/script.js` → `KTRD_CONFIG`             |
| Hero image                 | `images/hero/hero-main.jpg`                |
| Favicon                    | `images/favicon.png`                       |

---

## Features Included

- Fully responsive (mobile, tablet, desktop)
- Sticky header + hamburger menu on mobile
- Product catalogue with live filtering & sorting
- Product search (global + shop page)
- Product detail modal with related products
- Shopping cart with localStorage persistence
- Quantity controls, remove, clear cart
- WhatsApp order & enquiry system (configurable number)
- New Arrivals & Sale pages (auto-populated)
- Dedicated pages for every category & service
- Wedding gallery with swipe / touch support
- Dismissible announcement banner
- Sale banner (toggleable)
- Graceful missing-image fallbacks
- Accessibility considerations (focus states, labels, reduced-motion)
- SEO-friendly titles & meta descriptions
- Clean, commented, beginner-friendly code

---

## Notes

- Sample products are fictional placeholders. Replace them with your real products and images.
- No payment gateway is integrated. Orders are sent via WhatsApp. The structure can later accommodate Stripe/PayPal if needed.
- The site is static and works offline once loaded (except for Google Fonts and WhatsApp links).

---

© 2026 KTR’D. Built with care for a luxury lifestyle brand.
