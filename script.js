// ============================================================
// McDallars Ventures – script.js  (Fully Rebuilt)
// ============================================================

// ── PRODUCTS DATA ─────────────────────────────────────────
const products = [
  // ELECTRONICS
  { id: 1,  name: 'Smart LED TV 43"',                   price: 1499, oldPrice: 1799, category: 'electronics', badge: 'hot',  stars: 5, img: 'https://cdn.mos.cms.futurecdn.net/V98xXdiocqKJpPCCFh2Jo9.jpg' },
  { id: 2,  name: 'Wireless Bluetooth Speaker',          price: 249,  oldPrice: 320,  category: 'electronics', badge: 'sale', stars: 5, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80' },
  { id: 3,  name: 'Wireless Phone Charger 15W',          price: 79,   oldPrice: null, category: 'electronics', badge: 'new',  stars: 4, img: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&q=80' },
  { id: 4,  name: 'Portable Power Bank 20000mAh',        price: 149,  oldPrice: 180,  category: 'electronics', badge: null,   stars: 4, img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&q=80' },
  { id: 5,  name: 'All Sizes of Smart LED TV (32–65")',  price: 899,  oldPrice: 1200, category: 'electronics', badge: 'hot',  stars: 5, img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80' },
  { id: 6,  name: 'Tecno Camon Series Smartphone',       price: 699,  oldPrice: 850,  category: 'electronics', badge: 'hot',  stars: 5, img: 'https://cdn1.smartprix.com/rx-imiWdBFTF-w280-h280/tecno-camon-40-pro-5.webp' },
  { id: 7,  name: 'All Brands of Laptop',                price: 1999, oldPrice: 2500, category: 'electronics', badge: 'hot',  stars: 5, img: 'https://laptopvoyager.com/wp-content/uploads/2025/06/hp-vs-dell-vs-lenovo-laptop-which-is-better.webp' },
  { id: 8,  name: 'JBL Portable Bluetooth Speaker',      price: 399,  oldPrice: 550,  category: 'electronics', badge: 'sale', stars: 5, img: 'https://global.jbl.com/on/demandware.static/-/Sites-siteCatalog_JB_GBL/default/dw4f4d4950/navigation_images/Fly-In_All_Speakers.jpg' },
  { id: 9,  name: 'Various Types of Earphones & Earbuds',price: 89,   oldPrice: 130,  category: 'electronics', badge: 'sale', stars: 4, img: 'https://thumbs.dreamstime.com/z/various-types-earphones-set-headphones-earbuds-headset-wired-wireless-accessories-music-listening-gaming-vector-183396652.jpg' },
  { id: 10, name: 'Wall Mounted Air Conditioner 36000BTU',price: 3499, oldPrice: 4200, category: 'electronics', badge: 'hot', stars: 5, img: 'https://colthomeservices.com/wp-content/uploads/2022/11/Wall-Mounted-AC-Unit.jpg' },
  { id: 11, name: 'Different Types of Rice Cooker',      price: 299,  oldPrice: 380,  category: 'electronics', badge: 'new',  stars: 4, img: 'https://www.zojirushi.com/user/images/prod/14.2.jpg' },
  { id: 12, name: 'All Types of Ceiling Fans',           price: 249,  oldPrice: 320,  category: 'electronics', badge: null,   stars: 5, img: 'http://shiningondesign.com/wp-content/uploads/2017/07/ceiling-fans.png' },
  { id: 13, name: 'Stainless Steel Electric Kettle',     price: 89,   oldPrice: 120,  category: 'electronics', badge: 'new',  stars: 4, img: 'https://trembom.com/wp-content/uploads/2024/02/Best-Stainless-Steel-Electric-Kettle.png' },
  { id: 14, name: 'Electric Steam Iron 2200W',            price: 75,   oldPrice: 100,  category: 'electronics', badge: null,   stars: 4, img: 'https://images.nexusapp.co/assets/82/17/cd/169324139.jpg' },
  { id: 15, name: 'Android Tablet — All Sizes & Brands', price: 799,  oldPrice: 1050, category: 'electronics', badge: 'sale', stars: 4, img: 'https://s3b.cashify.in/gpro/uploads/2022/03/15210323/different-tablet-screen-sizes-1024x512.jpg' },
  { id: 16, name: 'SpeedX Power Strip with USB Ports',   price: 79,   oldPrice: 110,  category: 'electronics', badge: 'new',  stars: 4, img: 'https://img.drz.lazcdn.com/static/pk/p/6001f708186ae112be9981119b58da6f.jpg_720x720q80.jpg' },
  { id: 17, name: 'Mini Fridge with Freezer 3.5 cu.ft',  price: 999,  oldPrice: 1300, category: 'electronics', badge: 'hot',  stars: 5, img: 'https://i5.walmartimages.com/seo/3-5cu-ft-Compact-Refrigerator-Mini-Fridge-with-Freezer-Krib-Bling-Small-Refrigerator-with-2-Door_0890787a-3dee-4282-a00a-117a0331b8dd.20f6eeb52132da4ebf25d883727b7c69.jpeg' },
  { id: 18, name: 'Chest & Upright Freezers',             price: 1499, oldPrice: 1800, category: 'electronics', badge: 'hot',  stars: 5, img: 'https://cdnweb.danby.com/wp-content/uploads/2022/03/11205706/FreezerBanner.jpg' },
  { id: 19, name: 'Different Types of Phone Chargers',   price: 35,   oldPrice: 55,   category: 'electronics', badge: null,   stars: 4, img: 'https://cdn.shopify.com/s/files/1/0491/8460/4324/files/phone-charger-types.jpg?v=1747880603' },
  { id: 20, name: 'iPhone 11 & Samsung Galaxy A21s',     price: 1299, oldPrice: 1600, category: 'electronics', badge: 'hot',  stars: 5, img: 'https://news.pindula.co.zw/wp-content/uploads/2023/01/Samsung-Apple-Phones.jpg' },
  { id: 21, name: 'Wireless Earbuds — Best Brands',      price: 159,  oldPrice: 220,  category: 'electronics', badge: 'sale', stars: 4, img: 'https://rexsdeli.com/wp-content/uploads/2025/01/Wireless-Earbuds.jpg' },
  { id: 22, name: 'Countertop Blender — All Brands',     price: 199,  oldPrice: 270,  category: 'electronics', badge: 'new',  stars: 4, img: 'https://blenderjunkie.com/wp-content/uploads/2025/09/versatile_blenders_handle_tasks_s5frh.jpg' },
  { id: 23, name: 'Wireless Power Bank 10000mAh',         price: 99,   oldPrice: 140,  category: 'electronics', badge: null,   stars: 4, img: 'https://i5.walmartimages.com/asr/d93b21e4-e5b0-49df-86fa-432b1d0b8f41.6bd8e3c5b7ef4ab30fdf582fea4ea6c3.jpeg' },
  { id: 24, name: 'Smart Electric Oven 1200W Digital',   price: 699,  oldPrice: 900,  category: 'electronics', badge: 'hot',  stars: 5, img: 'https://image.made-in-china.com/2f0j00ErGkVoTqBQzg/1200W-120V-Smart-Electric-Oven-Digital-Kitchen-Built-in-Microwave.jpg' },

  // HOME & KITCHEN
  { id: 25, name: 'Non-stick Cookware Set',               price: 389,  oldPrice: null, category: 'home', badge: 'new',  stars: 4, img: 'https://images.unsplash.com/photo-1584990347449-39ce24b6a5d8?w=400&q=80' },
  { id: 26, name: 'Wall Mounted Fan',                     price: 199,  oldPrice: 250,  category: 'home', badge: 'hot',  stars: 5, img: 'https://images.unsplash.com/photo-1614914035050-94bef060d4f7?w=400&q=80' },
  { id: 27, name: 'Blender & Juicer Combo',               price: 299,  oldPrice: 380,  category: 'home', badge: 'sale', stars: 4, img: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&q=80' },
  { id: 28, name: 'Granitestone 20-Pc Cookware Set',      price: 799,  oldPrice: 1100, category: 'home', badge: 'hot',  stars: 5, img: 'https://i5.walmartimages.com/seo/Granitestone-20-Pc-Ceramic-Cookware-Set-Nonstick-Pots-Pans-Set-Non-Stick-Kitchen-Bakeware-Utensils-Pots-Pans-Cooking-Non-Toxic-Cookware-Sets-Oven-Dis_868fb395-830e-4dd8-9fe6-5c0ce68727e2.36f73a2dfbad3f85aca487b85d5f5416.jpeg' },
  { id: 29, name: 'Astercook 20-Pc Pots & Pans Set',     price: 649,  oldPrice: 900,  category: 'home', badge: 'sale', stars: 5, img: 'https://i5.walmartimages.com/seo/Astercook-20-Piece-Ceramic-Pots-Pans-Set-Non-Stick-Cookware-Set-Detachable-Handle-Oven-Safe-Induction-Ready-Stackable-RV-Kitchen-Cooking-Set-Removabl_e1430a01-1222-4aec-a4ff-8ad1e1016d1b.ff2b5605d75608a9289cbeac8914b674.jpeg' },
  { id: 30, name: 'Electric Hot Plate Single/Double Hob', price: 149,  oldPrice: 200,  category: 'home', badge: 'new',  stars: 4, img: 'https://i.ebayimg.com/images/g/WW8AAOSwHMNkdgmq/s-l1600.jpg' },

  // FASHION
  { id: 31, name: "Men's Polo Shirt",                    price: 85,   oldPrice: 120,  category: 'fashion', badge: null,   stars: 5, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80' },
  { id: 32, name: "Ladies Ankara Dress",                 price: 120,  oldPrice: 160,  category: 'fashion', badge: null,   stars: 5, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80' },
  { id: 33, name: "Men's Running Sneakers",              price: 195,  oldPrice: 250,  category: 'fashion', badge: 'hot',  stars: 5, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },

  // FOOD
  { id: 34, name: 'Organic Basmati Rice 5kg',            price: 65,   oldPrice: null, category: 'food', badge: 'new',  stars: 4, img: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9c49a?w=400&q=80' },
  { id: 35, name: 'Groundnut Cooking Oil 3L',            price: 55,   oldPrice: 70,   category: 'food', badge: null,   stars: 5, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80' },
];

// ── CART STATE ────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('mcdallars_cart') || '[]');

function saveCart() {
  localStorage.setItem('mcdallars_cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  updateCheckoutSummary();
  showToast(`Added: ${product.name}`, 'success');
  const btn = document.querySelector(`[data-id="${productId}"]`);
  if (btn) {
    const original = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = original; }, 1600);
  }
  // Bump badge
  const badge = document.getElementById('cartBadge');
  if (badge) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart(); updateCartUI(); updateCheckoutSummary();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart(); updateCartUI(); updateCheckoutSummary();
}

function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartUI() {
  // Badge(s)
  document.querySelectorAll('#cartBadge').forEach(b => {
    const count = getCartCount();
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });

  const cartItemsEl = document.getElementById('cartItems');
  const cartFooterEl = document.getElementById('cartFooter');
  const cartTotalEl = document.getElementById('cartTotal');

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <small>Add products to get started</small>
      </div>`;
    if (cartFooterEl) cartFooterEl.style.display = 'none';
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img" loading="lazy"/>
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty(${item.id},-1)" aria-label="Decrease">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id},1)" aria-label="Increase">+</button>
          </div>
          <span class="cart-item-price">GHS ${(item.price * item.qty).toFixed(2)}</span>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Remove">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>`).join('');
    if (cartFooterEl) {
      cartFooterEl.style.display = 'block';
      if (cartTotalEl) cartTotalEl.textContent = 'GHS ' + getCartTotal().toFixed(2);
    }
  }
}

// ── CART SIDEBAR TOGGLE ───────────────────────────────────
function showCartSidebar() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateCartUI();
}
function hideCartSidebar() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
window.hideCartSidebarGlobal = hideCartSidebar;

// ── RENDER PRODUCTS ───────────────────────────────────────
function renderProducts(list, containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const toRender = limit ? list.slice(0, limit) : list;
  if (toRender.length === 0) { container.innerHTML = ''; return; }
  container.innerHTML = toRender.map(p => `
    <div class="product-card reveal">
      <div class="product-image-wrap">
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : ''}
        <button class="product-wishlist" onclick="event.stopPropagation();wishlistToggle(this)" aria-label="Add to wishlist">
          <i class="far fa-heart"></i>
        </button>
        <img src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.onerror=null;this.style.display='none';this.parentElement.style.background='var(--bg-soft)'"/>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <div class="product-name" title="${p.name}">${p.name}</div>
        <div class="product-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)}</div>
        <div class="product-price">
          <span class="price-current">GHS ${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="price-old">GHS ${p.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" data-id="${p.id}" onclick="addToCart(${p.id})">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>`).join('');
  initReveal();
}

function wishlistToggle(btn) {
  const icon = btn.querySelector('i');
  icon.classList.toggle('far');
  icon.classList.toggle('fas');
  btn.style.color = icon.classList.contains('fas') ? '#ef4444' : '';
  showToast(icon.classList.contains('fas') ? 'Added to wishlist ❤️' : 'Removed from wishlist', 'success');
}

// ── CHECKOUT SUMMARY ──────────────────────────────────────
function updateCheckoutSummary() {
  const el = document.getElementById('summaryItems');
  const subtotalEl = document.getElementById('summarySubtotal');
  const totalEl = document.getElementById('summaryTotal');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = `<p class="empty-summary"><i class="fas fa-shopping-bag"></i><br>Your cart is empty.<br><a href="#">Add some products!</a></p>`;
  } else {
    el.innerHTML = cart.map(item => `
      <div class="summary-item">
        <img src="${item.img}" alt="${item.name}" class="summary-item-img" loading="lazy"/>
        <div class="summary-item-info">
          <strong>${item.name}</strong>
          <span>x${item.qty}</span>
        </div>
        <span class="summary-item-price">GHS ${(item.price * item.qty).toFixed(2)}</span>
      </div>`).join('');
  }
  const total = getCartTotal().toFixed(2);
  if (subtotalEl) subtotalEl.textContent = 'GHS ' + total;
  if (totalEl)    totalEl.textContent    = 'GHS ' + total;
}

// ── CHECKOUT FORM ─────────────────────────────────────────
function initCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateCheckout()) return;
    if (cart.length === 0) { showToast('Cart is empty! Please add products.', 'error'); return; }

    const name    = document.getElementById('custName').value.trim();
    const phone   = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes   = document.getElementById('custNotes')?.value.trim() || '';
    const payment = document.querySelector('input[name="payment"]:checked')?.value || 'pay_on_delivery';

    const orderData = {
      customer: { name, phone, address, notes, payment },
      items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
      total: getCartTotal().toFixed(2),
      date: new Date().toLocaleString('en-GH')
    };

    const btn = form.querySelector('.checkout-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Placing Order...';

    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
    .then(r => r.json())
    .then(() => showOrderModal(name, phone))
    .catch(() => showOrderModal(name, phone))
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-lock"></i> Place Order Securely';
    });
  });
}

function validateCheckout() {
  let valid = true;
  const fields = [
    { id: 'custName',    errId: 'errName',    msg: 'Please enter your full name.' },
    { id: 'custPhone',   errId: 'errPhone',   msg: 'Please enter a valid phone number.' },
    { id: 'custAddress', errId: 'errAddress', msg: 'Please enter your delivery address.' },
  ];
  fields.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (!el) return;
    if (!el.value.trim()) {
      el.classList.add('error');
      if (err) err.textContent = f.msg;
      valid = false;
    } else {
      el.classList.remove('error');
      if (err) err.textContent = '';
    }
  });
  return valid;
}

function showOrderModal(name, phone) {
  const msg = document.getElementById('orderConfirmMsg');
  if (msg) msg.textContent = `Thank you, ${name}! Your order has been received. We'll contact you on ${phone} shortly to confirm delivery.`;
  document.getElementById('orderModal')?.classList.add('open');
  cart = []; saveCart(); updateCartUI(); updateCheckoutSummary();
  document.getElementById('checkoutForm')?.reset();
}

function closeOrderModal() { document.getElementById('orderModal')?.classList.remove('open'); }

// ── CONTACT FORM ──────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateContact()) return;

    const btn = form.querySelector('.contact-submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const data = {
      name:    document.getElementById('cName').value.trim(),
      email:   document.getElementById('cEmail').value.trim(),
      phone:   document.getElementById('cPhone')?.value.trim() || '',
      subject: document.getElementById('cSubject')?.value.trim() || '',
      message: document.getElementById('cMessage').value.trim(),
      date: new Date().toLocaleString('en-GH')
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(() => showContactModal())
    .catch(() => showContactModal())
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    });
  });

  // Live clear errors
  form.querySelectorAll('input,textarea').forEach(el => {
    el.addEventListener('input', () => { el.classList.remove('error'); });
  });
}

function validateContact() {
  let valid = true;
  [
    { id: 'cName',    errId: 'errCname',    msg: 'Please enter your name.' },
    { id: 'cEmail',   errId: 'errCemail',   msg: 'Please enter a valid email.' },
    { id: 'cMessage', errId: 'errCmessage', msg: 'Please enter your message.' },
  ].forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (!el) return;
    const val = el.value.trim();
    let fieldErr = '';
    if (!val) { fieldErr = f.msg; }
    else if (f.id === 'cEmail' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { fieldErr = 'Please enter a valid email address.'; }
    if (fieldErr) { el.classList.add('error'); if (err) err.textContent = fieldErr; valid = false; }
    else          { el.classList.remove('error'); if (err) err.textContent = ''; }
  });
  return valid;
}

function showContactModal() {
  document.getElementById('contactModal')?.classList.add('open');
  document.getElementById('contactForm')?.reset();
}
function closeContactModal() { document.getElementById('contactModal')?.classList.remove('open'); }

// ── SHOP FILTERING ────────────────────────────────────────
let activeCategory = 'all';
let searchQuery    = '';
let sortMode       = 'default';
let visibleCount   = 12;
const PAGE_SIZE    = 12;

function getFilteredProducts() {
  let list = [...products];
  if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (sortMode === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (sortMode === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sortMode === 'name-asc')   list.sort((a,b) => a.name.localeCompare(b.name));
  return list;
}

function filterAndRender() {
  const filtered = getFilteredProducts();
  const noResults = document.getElementById('noResults');
  const countEl   = document.getElementById('resultCount');
  const lmWrap    = document.getElementById('loadMoreWrap');

  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    document.getElementById('shopGrid').innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    if (lmWrap)    lmWrap.style.display    = 'none';
  } else {
    if (noResults) noResults.style.display = 'none';
    const shown = filtered.slice(0, visibleCount);
    renderProducts(shown, 'shopGrid');
    if (lmWrap) lmWrap.style.display = visibleCount < filtered.length ? 'block' : 'none';
  }
}

function clearSearch() {
  searchQuery = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.classList.remove('visible');
  visibleCount = PAGE_SIZE;
  filterAndRender();
}

function initShopFilters() {
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const sortSelect  = document.getElementById('sortSelect');
  const filterBtns  = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim();
      visibleCount = PAGE_SIZE;
      if (searchClear) searchClear.classList.toggle('visible', searchQuery.length > 0);
      filterAndRender();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', clearSearch);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      sortMode = this.value;
      filterAndRender();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.dataset.cat;
      visibleCount = PAGE_SIZE;
      filterAndRender();
    });
  });

  // Load more
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += PAGE_SIZE;
      filterAndRender();
    });
  }

  // Preselect from URL ?cat=...
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat) {
    activeCategory = urlCat;
    filterBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.cat === urlCat);
    });
  }
}

// ── TESTIMONIALS SLIDER ───────────────────────────────────
let testiIndex = 0;

function initTestiSlider() {
  const cards  = document.querySelectorAll('.testi-card');
  const dots   = document.querySelectorAll('.tdot');
  const prev   = document.getElementById('testiPrev');
  const next   = document.getElementById('testiNext');
  if (!cards.length) return;

  function goTo(idx) {
    cards[testiIndex].classList.remove('testi-active');
    dots[testiIndex]?.classList.remove('active');
    testiIndex = (idx + cards.length) % cards.length;
    cards[testiIndex].classList.add('testi-active');
    dots[testiIndex]?.classList.add('active');
  }

  prev?.addEventListener('click', () => goTo(testiIndex - 1));
  next?.addEventListener('click', () => goTo(testiIndex + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.idx))));

  setInterval(() => goTo(testiIndex + 1), 5000);
}

// ── TOAST NOTIFICATIONS ───────────────────────────────────
function showToast(message, type = '') {
  const box = document.getElementById('toastBox');
  if (!box) return;
  const toast = document.createElement('div');
  toast.className = `toast${type ? ' ' + type : ''}`;
  toast.textContent = message;
  box.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── SCROLL REVEAL ─────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

function initPageReveal() {
  document.querySelectorAll('.product-card, .info-card, .feature-item, .testi-card, .cat-card, .why-card, .fi-anim, .cc-anim')
    .forEach(el => el.classList.add('reveal'));
  initReveal();
}

// ── NAVBAR ────────────────────────────────────────────────
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger= document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!navbar) return;

  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();

  hamburger?.addEventListener('click', function() {
    this.classList.toggle('open');
    navLinks?.classList.toggle('open');
    document.body.style.overflow = navLinks?.classList.contains('open') ? 'hidden' : '';
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// ── BACK TO TOP ───────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── SCROLL DOWN HINT ──────────────────────────────────────
function initScrollHint() {
  const hint = document.querySelector('.scroll-hint');
  hint?.addEventListener('click', () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initBackToTop();
  initScrollHint();
  updateCartUI();

  // Cart toggle
  document.getElementById('cartIcon')?.addEventListener('click', e => { e.preventDefault(); showCartSidebar(); });
  document.getElementById('closeCart')?.addEventListener('click', hideCartSidebar);
  document.getElementById('cartOverlay')?.addEventListener('click', hideCartSidebar);

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('open');
    });
  });

  // HOME PAGE
  if (document.getElementById('featuredGrid')) {
    renderProducts(products.slice(0, 8), 'featuredGrid');
    initTestiSlider();
    initPageReveal();
  }

  // SHOP PAGE
  if (document.getElementById('shopGrid')) {
    filterAndRender();
    initShopFilters();
    initCheckoutForm();
    updateCheckoutSummary();
    initPageReveal();
    if (window.location.hash === '#checkout') {
      setTimeout(() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' }), 400);
    }
  }

  // CONTACT PAGE
  if (document.getElementById('contactForm')) {
    initContactForm();
    initPageReveal();
  }
});

// Expose to inline HTML
window.addToCart       = addToCart;
window.removeFromCart  = removeFromCart;
window.updateQty       = updateQty;
window.clearSearch     = clearSearch;
window.closeOrderModal = closeOrderModal;
window.closeContactModal = closeContactModal;
