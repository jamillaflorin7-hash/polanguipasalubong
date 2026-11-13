"use strict";

const products = [
    {
        id: 1,
        name: "Polangui Kalamay",
        image: "kalamay.jpg",
        fallbackImage: "../KALAMAY SMALL.jpg",
        alt: "Polangui kalamay in traditional wrapping",
        description: "A traditional Polangui delicacy made from sugarcane (tubo). Naturally sweet with a distinctive texture.",
        variants: [
            { id: "small", size: "Small (250g)", price: 200 },
            { id: "large", size: "Large (500g)", price: 350 }
        ]
    },
    {
        id: 2,
        name: "Coconut Tarts",
        image: "coconut-tarts.jpg",
        fallbackImage: "../COCONUT MACAROONS.jpg",
        alt: "A selection of coconut tarts",
        description: "Baked pastries with sweet coconut filling inside a buttery golden crust.",
        variants: [
            { id: "small", size: "Small (6 pcs)", price: 200 },
            { id: "large", size: "Large (12 pcs)", price: 350 }
        ]
    },
    {
        id: 3,
        name: "Coconut Macaroons",
        image: "coconut-macaroons.jpg",
        fallbackImage: "../COCONUT MACAROONS.jpg",
        alt: "Freshly baked coconut macaroons",
        description: "Sweet coconut treats with a soft, chewy center and lightly golden exterior.",
        variants: [
            { id: "small", size: "Small (6 pcs)", price: 200 },
            { id: "large", size: "Large (12 pcs)", price: 350 }
        ]
    },
    {
        id: 4,
        name: "Pili Nut Candies",
        image: "pili-nut-candies.jpg",
        fallbackImage: "../PILI CANDIES.jpg",
        alt: "Sweet pili nut candies",
        description: "Sweet pili nut candies with a balance of nutty richness and caramel sweetness.",
        variants: [
            { id: "small", size: "Small (100g)", price: 200 },
            { id: "large", size: "Large (250g)", price: 350 }
        ]
    },
    {
        id: 5,
        name: "Bicol Tablea",
        image: "bicol-tablea.jpg",
        fallbackImage: "../TABLEA.jpg",
        alt: "Traditional Bicol tablea cacao products",
        description: "Traditional chocolate tablets made from roasted cacao beans.",
        variants: [
            { id: "small", size: "Small (100g)", price: 200 },
            { id: "large", size: "Large (250g)", price: 400 }
        ]
    },
    {
        id: 6,
        name: "Salabat",
        image: "salabat.jpg",
        fallbackImage: "../SALABAT.jpg",
        alt: "Salabat ginger drink mix",
        description: "Traditional ginger drink known for its warm, aromatic flavor.",
        variants: [
            { id: "small", size: "Small (100g)", price: 200 },
            { id: "large", size: "Large (250g)", price: 350 }
        ]
    },
    {
        id: 7,
        name: "Mascobado Sugar",
        image: "mascobado-sugar.jpg",
        fallbackImage: "../MUSCUVADO.jpg",
        alt: "Local mascobado sugar",
        description: "Natural unrefined sugar with rich molasses-like flavor.",
        variants: [
            { id: "small", size: "Small (250g)", price: 200 },
            { id: "large", size: "Large (1kg)", price: 450 }
        ]
    },
    {
        id: 8,
        name: "Ginataang Santol",
        image: "ginataang-santol.jpg",
        fallbackImage: "../SANTOL.jpg",
        alt: "Ginataang santol",
        description: "Santol cooked in coconut milk with chili and seasonings.",
        variants: [
            { id: "small", size: "Small (250g)", price: 250 },
            { id: "large", size: "Large (500g)", price: 400 }
        ]
    },
    {
        id: 9,
        name: "Boneless Dilis",
        image: "boneless-dilis.jpg",
        fallbackImage: "../BONELESS DILIS.jpg",
        alt: "Boneless dilis anchovies",
        description: "Savory deboned anchovies perfect as snack or rice partner.",
        variants: [
            { id: "small", size: "Small (100g)", price: 250 },
            { id: "large", size: "Large (250g)", price: 400 }
        ]
    },
    {
        id: 10,
        name: "Laing",
        image: "laing.jpg",
        fallbackImage: "../LAING.jpg",
        alt: "Bicol laing",
        description: "Bicol’s famous creamy and spicy taro leaf dish cooked in coconut milk.",
        variants: [
            { id: "small", size: "Small (250g)", price: 250 },
            { id: "large", size: "Large (500g)", price: 400 }
        ]
    },
    {
        id: 11,
        name: "Bicol Express",
        image: "bicol-express.jpg",
        fallbackImage: "../BICOL EXPRESS.jpg",
        alt: "Bicol Express",
        description: "Pork simmered in coconut milk, chili, shrimp paste, and spices.",
        variants: [
            { id: "small", size: "Small (250g)", price: 300 },
            { id: "large", size: "Large (500g)", price: 500 }
        ]
    },
    {
        id: 12,
        name: "Pili Tart",
        image: "pili-tart.jpg",
        fallbackImage: "../PILI TARTS.jpg",
        alt: "Pili tarts",
        description: "Buttery crisp tart filled with sweet and flavorful pili nuts.",
        variants: [
            { id: "small", size: "Small (6 pcs)", price: 250 },
            { id: "large", size: "Large (12 pcs)", price: 450 }
        ]
    },
    {
        id: 13,
        name: "Pili Candy",
        image: "pili-candy.jpg",
        fallbackImage: "../PILI CANDIES.jpg",
        alt: "Pili candy",
        description: "Pili nuts coated in caramelized sugar for a sweet crunchy treat.",
        variants: [
            { id: "small", size: "Small (100g)", price: 250 },
            { id: "large", size: "Large (250g)", price: 400 }
        ]
    },
    {
        id: 14,
        name: "Sinarapan",
        image: "sinarapan.jpg",
        fallbackImage: "../DRIED SINARAPAN.jpg",
        alt: "Dried sinarapan",
        description: "Tiny freshwater fish known for delicate flavor, used in traditional dishes.",
        variants: [
            { id: "small", size: "Small (100g)", price: 250 },
            { id: "medium", size: "Medium (250g)", price: 450 },
            { id: "large", size: "Large (500g)", price: 800 }
        ]
    }
];

const STORE_KEY = "polangui-pasalubong-store";
const THEME_KEY = "darkMode";
const LEGACY_THEME_KEY = "polangui-pasalubong-theme";
const PAYMENT_METHODS = {
    GCash: "GCash",
    COD: "Cash on Delivery",
    "Bank Transfer": "Bank Transfer",
    Pickup: "Pay Upon Pickup"
};
const currency = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0
});

function showStatus(message) {
    const status = document.getElementById("siteStatus");
    if (!status) return;
    status.textContent = message;
    status.hidden = false;
}

function loadStore() {
    try {
        const saved = localStorage.getItem(STORE_KEY);
        if (!saved) return { cart: [], lastOrder: null };

        const parsed = JSON.parse(saved);
        if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.cart)) {
            throw new Error("Saved cart data has an invalid format.");
        }

        const cart = parsed.cart
            .filter((item) => {
                const product = products.find((entry) => entry.id === item.id);
                return product
                    && product.variants.some((variant) => variant.id === item.variantId)
                    && Number.isInteger(item.qty) && item.qty > 0 && item.qty <= 99;
            })
            .map((item) => ({ id: item.id, variantId: item.variantId, qty: item.qty }));

        if (cart.length !== parsed.cart.length) {
            showStatus("The product list changed. Unavailable saved cart items were removed.");
        }

        return {
            cart,
            lastOrder: parsed.lastOrder && typeof parsed.lastOrder === "object"
                ? parsed.lastOrder
                : null
        };
    } catch (error) {
        console.error("Could not read the saved storefront data.", error);
        showStatus("Saved cart data could not be read. You can continue with a new cart.");
        return { cart: [], lastOrder: null };
    }
}

const store = loadStore();

function saveStore(nextStore) {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(nextStore));
        return true;
    } catch (error) {
        console.error("Could not save storefront data.", error);
        showStatus("Your browser could not save this change. Check your storage settings before leaving this page.");
        return false;
    }
}

function getCartLines() {
    return store.cart
        .map((entry) => {
            const product = products.find((item) => item.id === entry.id);
            const variant = product?.variants.find((item) => item.id === entry.variantId);
            return product && variant
                ? { ...product, variantId: variant.id, size: variant.size, price: variant.price, qty: entry.qty }
                : null;
        })
        .filter(Boolean);
}

function getCartCount() {
    return store.cart.reduce((count, item) => count + item.qty, 0);
}

function getCartTotal() {
    return getCartLines().reduce((total, item) => total + item.price * item.qty, 0);
}

function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function createProductCard(product, featured = false) {
    const article = element("article", "product-card");
    article.dataset.productId = product.id;
    article.tabIndex = 0;
    article.setAttribute("aria-label", `View details for ${product.name}`);
    const visual = element("div", "product-visual");

    if (product.image) {
        const image = document.createElement("img");
        image.src = product.image;
        image.dataset.fallback = product.fallbackImage;
        image.alt = product.alt;
        image.loading = "lazy";
        image.addEventListener("error", () => {
            if (image.dataset.fallback && !image.dataset.fallbackUsed) {
                image.dataset.fallbackUsed = "true";
                image.src = image.dataset.fallback;
            } else {
                image.hidden = true;
            }
        });
        visual.append(image);
    } else {
        const artwork = element("div", "product-art");
        artwork.setAttribute("role", "img");
        artwork.setAttribute("aria-label", product.name);
        artwork.append(element("span", "", product.art));
        visual.append(artwork);
    }

    if (featured) {
        const tag = element("span", "product-tag", "Local favorite");
        visual.append(tag);
    }

    const info = element("div", "product-info");
    const details = element("div");
    details.append(
        element(featured ? "h3" : "h2", "", product.name),
        element("p", "", product.description)
    );

    const bottom = element("div", "product-info-bottom");
    const lowestPrice = Math.min(...product.variants.map((variant) => variant.price));
    bottom.append(element("span", "product-price", `From ${currency.format(lowestPrice)}`));
    const addButton = element("button", "product-action", "Choose size");
    addButton.type = "button";
    addButton.dataset.openProduct = product.id;
    addButton.setAttribute("aria-label", `Choose a size for ${product.name}`);
    bottom.append(addButton);
    info.append(details, bottom);
    article.append(visual, info);
    return article;
}

function renderProductList(container, items, featured = false) {
    if (!container) return;
    container.replaceChildren(...items.map((product) => createProductCard(product, featured)));
}

let modalTrigger = null;

function openProduct(id, trigger = null) {
    const product = products.find((item) => String(item.id) === String(id));
    const modal = document.getElementById("product-modal");
    if (!product || !modal || modal.open) return;

    modalTrigger = trigger;
    const image = document.getElementById("modal-img");
    if (product.image) {
        image.src = product.image;
        image.dataset.fallback = product.fallbackImage;
        image.dataset.fallbackUsed = "";
        image.alt = product.alt;
        image.hidden = false;
    } else {
        image.removeAttribute("src");
        image.alt = "";
        image.hidden = true;
    }

    document.getElementById("modal-name").textContent = product.name;
    document.getElementById("modal-desc").textContent = product.description;
    const variants = document.getElementById("modal-variants");
    variants.replaceChildren(...product.variants.map((variant) => {
        const button = element("button", "button variant-btn", `${variant.size} — ${currency.format(variant.price)}`);
        button.type = "button";
        button.dataset.addToCart = product.id;
        button.dataset.variantId = variant.id;
        button.setAttribute("aria-label", `Add ${product.name}, ${variant.size}, to cart for ${currency.format(variant.price)}`);
        return button;
    }));
    modal.showModal();
    document.getElementById("modal-close").focus();
}

window.openProduct = openProduct;

function closeModal() {
    const modal = document.getElementById("product-modal");
    if (modal?.open) modal.close();
}

function updateCartBadges() {
    document.querySelectorAll("[data-cart-count]").forEach((badge) => {
        badge.textContent = getCartCount();
    });
}

function renderProductsPage() {
    const grid = document.getElementById("productList");
    if (!grid) return;

    renderProductList(grid, products);
    const empty = document.getElementById("emptyResults");
    document.getElementById("search").addEventListener("input", (event) => {
        const query = event.target.value.trim().toLocaleLowerCase();
        let visibleCount = 0;
        grid.querySelectorAll(".product-card").forEach((card, index) => {
            const matches = products[index].name.toLocaleLowerCase().includes(query);
            card.hidden = !matches;
            if (matches) visibleCount++;
        });
        empty.hidden = visibleCount > 0;
    });
}

function setCartQuantity(id, variantId, nextQuantity) {
    const existing = store.cart.find((item) => item.id === id && item.variantId === variantId);
    if (nextQuantity <= 0) {
        store.cart = store.cart.filter((item) => item.id !== id || item.variantId !== variantId);
    } else if (nextQuantity > 99) {
        showStatus("You can add up to 99 of each product.");
        return;
    } else if (existing) {
        existing.qty = nextQuantity;
    } else {
        store.cart.push({ id, variantId, qty: nextQuantity });
    }
    saveStore(store);
    updateCartBadges();
    renderCartPage();
    renderCheckoutPage();
}

function addToCart(id, variantId) {
    const product = products.find((item) => item.id === Number(id));
    const variant = product?.variants.find((item) => item.id === variantId);
    if (!product || !variant) {
        showStatus("Choose a valid product size before adding it to your cart.");
        return;
    }

    const existing = store.cart.find((item) => item.id === product.id && item.variantId === variant.id);
    setCartQuantity(product.id, variant.id, existing ? existing.qty + 1 : 1);
    showStatus(`${product.name} (${variant.size}) added to your cart.`);
}

function createCartRow(item) {
    const row = element("article", "cart-row");
    row.dataset.productId = item.id;
    row.dataset.variantId = item.variantId;
    const details = element("div");
    details.append(
        element("h3", "", item.name),
        element("p", "", `${item.size} · ${currency.format(item.price)} each`)
    );

    const controls = element("div");
    const quantityControls = element("div", "cart-controls");
    const decrease = element("button", "cart-action", "−");
    decrease.type = "button";
    decrease.dataset.cartAction = "decrease";
    decrease.dataset.productId = item.id;
    decrease.dataset.variantId = item.variantId;
    decrease.setAttribute("aria-label", `Decrease ${item.name} quantity`);
    const quantity = element("span", "cart-qty", `Qty: ${item.qty}`);
    const increase = element("button", "cart-action", "+");
    increase.type = "button";
    increase.dataset.cartAction = "increase";
    increase.dataset.productId = item.id;
    increase.dataset.variantId = item.variantId;
    increase.setAttribute("aria-label", `Increase ${item.name} quantity`);
    const remove = element("button", "cart-action cart-action-remove", "Remove");
    remove.type = "button";
    remove.dataset.cartAction = "remove";
    remove.dataset.productId = item.id;
    remove.dataset.variantId = item.variantId;
    quantityControls.append(decrease, quantity, increase, remove);
    controls.append(
        element("p", "cart-row-price", currency.format(item.price * item.qty)),
        quantityControls
    );
    row.append(details, controls);
    return row;
}

function renderCartPage() {
    const list = document.getElementById("cartItems");
    if (!list) return;

    const items = getCartLines();
    const isEmpty = items.length === 0;
    document.getElementById("cartEmpty").hidden = !isEmpty;
    document.getElementById("cartLayout").hidden = isEmpty;
    list.replaceChildren(...items.map(createCartRow));
    document.getElementById("cartItemCount").textContent = `${getCartCount()} ${getCartCount() === 1 ? "item" : "items"}`;
    renderCartSummary();
}

function renderSummary(container, showPayment = false) {
    if (!container) return;
    const items = getCartLines();
    const list = container.querySelector("[data-summary-items]");
    list.replaceChildren();

    items.forEach((item) => {
        const line = element("p", "summary-line");
        line.append(
            element("span", "", `${item.name} · ${item.size} × ${item.qty}`),
            element("strong", "", currency.format(item.price * item.qty))
        );
        list.append(line);
    });

    container.querySelector("[data-summary-total]").textContent = currency.format(getCartTotal());
    const payment = container.querySelector("[data-summary-payment]");
    if (payment) payment.hidden = !showPayment;
}

function renderCartSummary() {
    renderSummary(document.getElementById("cartSummary"));
}

function renderReceipt(order) {
    const receipt = document.getElementById("receiptDetails");
    receipt.replaceChildren();
    const details = [
        `Order number: ${order.orderNumber}`,
        `Name: ${order.customer.name}`,
        `Phone: ${order.customer.phone}`
    ];
    if (order.paymentMethod === PAYMENT_METHODS.Pickup) {
        details.push("Collection: Pay upon pickup");
    } else {
        details.push(`Delivery address: ${order.customer.address}`);
    }
    details.push(`Payment: ${order.paymentMethod || PAYMENT_METHODS.COD}`);
    details.forEach((line) => receipt.append(element("p", "", line)));
    if (order.customer.email) receipt.append(element("p", "", `Email: ${order.customer.email}`));
    if (order.customer.notes) receipt.append(element("p", "", `Order notes: ${order.customer.notes}`));

    const list = document.getElementById("receiptItems");
    list.replaceChildren();
    order.items.forEach((item) => {
        const line = element("li");
        line.append(
            element("span", "", `${item.name} · ${item.size} × ${item.qty}`),
            element("strong", "", currency.format(item.price * item.qty))
        );
        list.append(line);
    });
    document.getElementById("receiptTotal").textContent = currency.format(order.total);
}

function renderCheckoutPage() {
    const form = document.getElementById("checkoutForm");
    if (!form) return;

    const isEmpty = store.cart.length === 0;
    const previousOrder = store.lastOrder;
    const hasConfirmation = isEmpty && previousOrder;
    document.getElementById("checkoutEmpty").hidden = !isEmpty || Boolean(hasConfirmation);
    document.getElementById("checkoutLayout").hidden = isEmpty || Boolean(hasConfirmation);
    document.getElementById("orderConfirmation").hidden = !hasConfirmation;

    if (hasConfirmation) {
        renderReceipt(previousOrder);
        return;
    }
    if (!isEmpty) {
        renderSummary(document.getElementById("checkoutSummary"), true);
        updatePaymentDetails();
    }
}

function updatePaymentDetails() {
    const methodSelect = document.getElementById("payment-method");
    if (!methodSelect) return;

    const method = methodSelect.value;
    const instructions = {
        GCash: {
            title: "GCash Payment",
            messages: [
                "The shop will provide verified GCash payment details after you place your order.",
                "Keep your receipt for confirmation. No payment is processed on this website."
            ]
        },
        COD: {
            title: "Cash on Delivery",
            messages: ["Pay in cash when your order is delivered. The shop will confirm any delivery fee."]
        },
        "Bank Transfer": {
            title: "Bank Transfer",
            messages: [
                "The shop will provide verified bank transfer details after you place your order.",
                "No payment is processed on this website."
            ]
        },
        Pickup: {
            title: "Pay Upon Pickup",
            messages: ["Pay at the store when you pick up your order. The shop will confirm pickup arrangements."]
        }
    };
    const addressField = document.getElementById("deliveryAddressField");
    const addressInput = document.getElementById("deliveryAddress");
    const pickup = method === "Pickup";
    const details = document.getElementById("payment-details");
    const instruction = instructions[method];

    details.replaceChildren();
    if (instruction) {
        details.append(element("h4", "", instruction.title));
        instruction.messages.forEach((message) => details.append(element("p", "", message)));
    }
    addressField.hidden = pickup;
    addressInput.required = !pickup;
    document.getElementById("orderNotesLabel").firstChild.textContent = pickup
        ? "Pickup notes "
        : "Delivery or pickup notes ";
    document.getElementById("checkout-payment-summary").textContent =
        PAYMENT_METHODS[method] || "Choose a method";
}

function submitOrder(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const items = getCartLines();
    if (!items.length) {
        showStatus("Your cart is empty. Add a product before placing an order.");
        renderCheckoutPage();
        return;
    }

    const data = new FormData(form);
    const paymentMethod = PAYMENT_METHODS[String(data.get("paymentMethod"))];
    if (!paymentMethod) {
        showStatus("Choose a valid payment method before placing your order.");
        return;
    }
    const order = {
        orderNumber: `PK-${Date.now().toString().slice(-8)}`,
        customer: {
            name: String(data.get("name")).trim(),
            phone: String(data.get("phone")).trim(),
            email: String(data.get("email")).trim(),
            address: String(data.get("address") || "").trim(),
            notes: String(data.get("notes")).trim()
        },
        paymentMethod,
        items: items.map((item) => ({
            id: item.id,
            variantId: item.variantId,
            size: item.size,
            name: item.name,
            price: item.price,
            qty: item.qty
        })),
        total: getCartTotal(),
        createdAt: new Date().toISOString()
    };

    const completedStore = { cart: [], lastOrder: order };
    if (!saveStore(completedStore)) return;
    store.cart = [];
    store.lastOrder = order;
    form.reset();
    renderCheckoutPage();
    updateCartBadges();
    document.getElementById("orderConfirmation").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateThemeButton(isDark) {
    const button = document.getElementById("darkModeBtn");
    if (!button) return;
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    document.getElementById("dark-icon").textContent = isDark ? "☀️" : "🌙";
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark");
    updateThemeButton(isDark);

    try {
        localStorage.setItem(THEME_KEY, String(isDark));
    } catch (error) {
        console.error("Could not save the theme preference.", error);
        showStatus("Your appearance changed, but the preference could not be saved.");
    }
}

function applyTheme() {
    const button = document.getElementById("darkModeBtn");
    let isDark = false;
    try {
        const savedTheme = localStorage.getItem(THEME_KEY);
        isDark = savedTheme === "true"
            || (savedTheme === null && localStorage.getItem(LEGACY_THEME_KEY) === "dark");
    } catch (error) {
        console.error("Could not read the saved theme preference.", error);
        showStatus("Your saved appearance setting could not be read.");
    }

    document.body.classList.toggle("dark", isDark);
    updateThemeButton(isDark);
    button.addEventListener("click", toggleDarkMode);
}

document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-cart]");
    if (addButton) {
        addToCart(addButton.dataset.addToCart, addButton.dataset.variantId);
        if (addButton.closest("#product-modal")) closeModal();
        return;
    }

    const optionsButton = event.target.closest("[data-open-product]");
    if (optionsButton) {
        openProduct(optionsButton.dataset.openProduct, optionsButton);
        return;
    }

    const card = event.target.closest(".product-card[data-product-id]");
    if (card) openProduct(card.dataset.productId, card);

    if (event.target.id === "product-modal") closeModal();

    const cartAction = event.target.closest("[data-cart-action]");
    if (cartAction) {
        const id = Number(cartAction.dataset.productId);
        const variantId = cartAction.dataset.variantId;
        const item = store.cart.find((entry) => entry.id === id && entry.variantId === variantId);
        if (!item) return;
        if (cartAction.dataset.cartAction === "increase") setCartQuantity(item.id, item.variantId, item.qty + 1);
        if (cartAction.dataset.cartAction === "decrease") setCartQuantity(item.id, item.variantId, item.qty - 1);
        if (cartAction.dataset.cartAction === "remove") setCartQuantity(item.id, item.variantId, 0);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.getElementById("product-modal")?.open) {
        event.preventDefault();
        closeModal();
        return;
    }

    if (event.target.closest(".product-card[data-product-id]") && event.target === event.target.closest(".product-card")) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProduct(event.target.dataset.productId, event.target);
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    const modal = document.getElementById("product-modal");
    modal?.addEventListener("close", () => {
        modalTrigger?.focus();
        modalTrigger = null;
    });
    document.getElementById("modal-img")?.addEventListener("error", (event) => {
        const image = event.currentTarget;
        if (image.dataset.fallback && !image.dataset.fallbackUsed) {
            image.dataset.fallbackUsed = "true";
            image.src = image.dataset.fallback;
        } else {
            image.hidden = true;
        }
    });
    document.getElementById("modal-close")?.addEventListener("click", closeModal);
    renderProductList(document.getElementById("featuredProducts"), products.slice(0, 3), true);
    renderProductsPage();
    renderCartPage();
    renderCartSummary();
    renderCheckoutPage();
    updateCartBadges();
    document.getElementById("checkoutForm")?.addEventListener("submit", submitOrder);
    document.getElementById("payment-method")?.addEventListener("change", updatePaymentDetails);
});
