import './index.css'

const careByCategory = {
  Shoes: [
    'Wipe gently with a dry, soft cloth after each wear.',
    'Store with shoe trees in the dust bag, away from direct heat.',
    'Use a specialist leather protector before the first wear.',
  ],
  Outfits: [
    'Air between wears and brush lightly before storing.',
    'Dry clean only with a trusted specialist.',
    'Store on a broad hanger to preserve the shoulder line.',
  ],
  Dresses: [
    'Professional dry clean only; do not spot treat.',
    'Store hanging in the supplied breathable garment bag.',
    'Steam from the reverse on a low setting to release creases.',
  ],
  Bags: [
    'Keep away from rain, oils, and prolonged sunlight.',
    'Fill lightly with tissue and store upright in the dust bag.',
    'Condition leather sparingly with a specialist neutral cream.',
  ],
}

const products = [
  {
    id: 1,
    name: 'Sculptural Heel Mule',
    brand: 'Maison Éclat',
    category: 'Shoes',
    price: '$485',
    description: 'An architectural block heel in burnished leather.',
    material: 'Italian calf leather, leather sole',
    origin: 'Handmade in Italy',
    fit: 'True to size · 75 mm heel',
    image: 'mule',
  },
  {
    id: 2,
    name: 'Point-Toe Slingback',
    brand: 'Atelier Voss',
    category: 'Shoes',
    price: '$360',
    description: 'A precise slingback with a quiet gold buckle.',
    material: 'Kid leather, brushed brass hardware',
    origin: 'Made in Spain',
    fit: 'Narrow fit · 45 mm heel',
    image: 'photo-1543163521-1bf539c55dd2',
  },
  {
    id: 3,
    name: 'Strappy Sandal',
    brand: 'Lumière Studio',
    category: 'Shoes',
    price: '$295',
    description: 'Hand-finished straps in a soft mineral grey.',
    material: 'Nappa leather, cushioned leather footbed',
    origin: 'Made in Portugal',
    fit: 'True to size · Adjustable buckle',
    image: 'photo-1565201053376-de8b6fd6aa66',
  },
  {
    id: 4,
    name: 'Wide-Leg Wool Suit',
    brand: 'Céline Blanche',
    category: 'Outfits',
    price: '$1,240',
    description: 'Soft tailoring with a long, assured line.',
    material: '92% virgin wool, 8% cashmere',
    origin: 'Tailored in France',
    fit: 'Relaxed fit · High-rise trouser',
    image: 'photo-1613915617430-8ab0fd7c6baf',
  },
  {
    id: 5,
    name: 'Linen Co-ord Set',
    brand: 'Terra & Form',
    category: 'Outfits',
    price: '$580',
    description: 'A relaxed blazer and wide trouser in warm stone.',
    material: 'European linen with corozo buttons',
    origin: 'Made in Lithuania',
    fit: 'Easy fit · Take your usual size',
    image: 'photo-1662532577856-e8ee8b138a8b',
    imagePosition: 'center 35%',
  },
  {
    id: 6,
    name: 'Noir Evening Ensemble',
    brand: 'Maison Éclat',
    category: 'Outfits',
    price: '$720',
    description: 'Fluid layers balanced by a structured jacket.',
    material: 'Silk chiffon, wool crepe',
    origin: 'Made in England',
    fit: 'Close shoulder · Fluid through the body',
    image: 'photo-1629511565591-a1d494ad6c58',
  },
  {
    id: 7,
    name: 'Bias-Cut Slip Dress',
    brand: 'Atelier Voss',
    category: 'Dresses',
    price: '$895',
    description: 'Champagne silk cut to move with the body.',
    material: '100% silk charmeuse',
    origin: 'Made in Italy',
    fit: 'Skims the body · Midi length',
    image: 'photo-1664076458686-3449062080ac',
  },
  {
    id: 8,
    name: 'Column Dress',
    brand: 'Lumière Studio',
    category: 'Dresses',
    price: '$660',
    description: 'A clean column silhouette with sculpted seams.',
    material: 'Cotton faille, cupro lining',
    origin: 'Made in Japan',
    fit: 'Fitted bodice · Straight skirt',
    image: 'photo-1659522761084-79196b64abe4',
  },
  {
    id: 9,
    name: 'Draped Day Dress',
    brand: 'Terra & Form',
    category: 'Dresses',
    price: '$740',
    description: 'Considered drape in a softly weighted cloth.',
    material: 'FSC-certified viscose crepe',
    origin: 'Made in Portugal',
    fit: 'Relaxed waist · Ankle length',
    image: 'photo-1567777301743-3b7ef158aadf',
  },
  {
    id: 10,
    name: 'Mini Frame Tote',
    brand: 'Céline Blanche',
    category: 'Bags',
    price: '$1,150',
    description: 'A precise everyday tote with a framed profile.',
    material: 'Grained calfskin, suede lining',
    origin: 'Handmade in Italy',
    fit: '22 × 17 × 9 cm · Detachable strap',
    image: 'photo-1682745230951-8a5aa9a474a0',
  },
  {
    id: 11,
    name: 'Rounded Shoulder Bag',
    brand: 'Maison Éclat',
    category: 'Bags',
    price: '$870',
    description: 'A softened silhouette in supple black leather.',
    material: 'Vegetable-tanned leather, cotton lining',
    origin: 'Made in Spain',
    fit: '28 × 18 × 7 cm · Adjustable strap',
    image: 'photo-1705909237050-7a7625b47fac',
  },
  {
    id: 12,
    name: 'Archive Day Bag',
    brand: 'Atelier Voss',
    category: 'Bags',
    price: '$430',
    description: 'A compact top-handle bag with a vintage cadence.',
    material: 'Pebbled leather, cotton twill lining',
    origin: 'Made in England',
    fit: '24 × 16 × 8 cm · Internal pocket',
    image: 'photo-1575202332411-b01fe9ace7a8',
  },
].map((product) => ({ ...product, care: careByCategory[product.category] }))

const categories = ['All', 'Shoes', 'Outfits', 'Dresses', 'Bags']
const imageUrl = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=85&w=${width}`

const root = document.querySelector('#root')

root.innerHTML = `
  <div class="app-shell">
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Keen Grove home">Keen Grove</a>
      <nav aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#care">Care journal</a>
        <a href="#about">About</a>
      </nav>
      <span class="edition">No. 01 — 2026</span>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <img src="${imageUrl('photo-1788999423880-6e271d7323d3', 2000)}" alt="A woman in warm brown tailoring holding a dark handbag">
        <div class="hero-wash"></div>
        <div class="hero-copy">
          <p class="eyebrow">Autumn / Winter 2026</p>
          <h1 id="hero-title">Objects for<br><em>daily ritual.</em></h1>
          <p class="hero-intro">A study in proportion, texture and longevity. Twelve considered pieces for a wardrobe built slowly.</p>
        </div>
        <p class="hero-caption">The New Season Edit · London</p>
      </section>

      <section class="collection" id="collection" aria-labelledby="collection-title">
        <div class="collection-heading">
          <div>
            <p class="eyebrow accent">The catalogue</p>
            <h2 id="collection-title">A considered selection</h2>
          </div>
          <p>Pieces selected for their clarity of line, honest materials, and ability to live well over time.</p>
        </div>

        <div class="filter-bar" aria-label="Filter products by category">
          <span>Browse by</span>
          <div id="filters"></div>
        </div>

        <div class="product-grid" id="product-grid" aria-live="polite"></div>
      </section>

      <section class="care-journal" id="care" aria-labelledby="care-title">
        <p class="journal-number">01</p>
        <div>
          <p class="eyebrow">The care journal</p>
          <h2 id="care-title">Wear often.<br>Maintain thoughtfully.</h2>
        </div>
        <div class="journal-copy">
          <p>Longevity is the quietest form of luxury. Every product entry includes practical guidance for cleaning, storing, and preserving the materials over time.</p>
          <button type="button" id="care-guide">Explore a care guide <span aria-hidden="true">→</span></button>
        </div>
      </section>
    </main>

    <footer id="about">
      <div class="footer-wordmark">Keen Grove</div>
      <div class="footer-meta">
        <p>Independent fashion catalogue<br>London · Copenhagen</p>
        <p>© 2026 Keen Grove<br>Made with consideration</p>
      </div>
    </footer>
  </div>
  <div id="detail-root"></div>
`

const filters = document.querySelector('#filters')
const productGrid = document.querySelector('#product-grid')
const detailRoot = document.querySelector('#detail-root')
let activeCategory = 'All'

function renderFilters() {
  filters.innerHTML = categories
    .map((category) => {
      const count =
        category === 'All' ? products.length : products.filter((product) => product.category === category).length
      return `
        <button type="button" class="${category === activeCategory ? 'active' : ''}" data-category="${category}" aria-pressed="${category === activeCategory}">
          ${category} <sup>${count}</sup>
        </button>
      `
    })
    .join('')
}

function productCard(product) {
  const position = product.imagePosition ? `style="object-position: ${product.imagePosition}"` : ''
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${imageUrl(product.image, 900)}" alt="${product.name} by ${product.brand}" class="product-image" ${position} loading="lazy">
        <span class="product-number">${String(product.id).padStart(2, '0')}</span>
        <div class="product-action">
          <button type="button" data-product-id="${product.id}" aria-label="View details for ${product.name}">View details</button>
        </div>
      </div>
      <div class="product-copy">
        <div>
          <p class="eyebrow">${product.brand}</p>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
        </div>
        <p class="price">${product.price}</p>
      </div>
    </article>
  `
}

function renderProducts() {
  const visibleProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)
  productGrid.innerHTML = visibleProducts.map(productCard).join('')
}

function openDetails(product) {
  const position = product.imagePosition ? `style="object-position: ${product.imagePosition}"` : ''
  detailRoot.innerHTML = `
    <div class="detail-layer" role="presentation">
      <aside class="detail-panel" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div class="detail-topbar">
          <span>Product ${String(product.id).padStart(2, '0')}</span>
          <button type="button" id="close-details">Close</button>
        </div>
        <div class="detail-media">
          <img src="${imageUrl(product.image, 1200)}" alt="${product.name} by ${product.brand}" ${position}>
        </div>
        <div class="detail-content">
          <p class="eyebrow accent">${product.brand}</p>
          <h2 id="detail-title">${product.name}</h2>
          <p class="detail-price">${product.price}</p>
          <p class="detail-intro">${product.description}</p>
          <dl class="spec-list">
            <div><dt>Composition</dt><dd>${product.material}</dd></div>
            <div><dt>Provenance</dt><dd>${product.origin}</dd></div>
            <div><dt>Fit & dimensions</dt><dd>${product.fit}</dd></div>
          </dl>
          <div class="care-block">
            <p class="eyebrow">Care guide</p>
            <h3>How to maintain it</h3>
            <ol>
              ${product.care
                .map(
                  (instruction, index) =>
                    `<li><span>${String(index + 1).padStart(2, '0')}</span>${instruction}</li>`,
                )
                .join('')}
            </ol>
          </div>
          <p class="care-note">With attentive care, natural materials develop character rather than simply showing wear.</p>
        </div>
      </aside>
    </div>
  `

  document.body.classList.add('no-scroll')
  document.querySelector('#close-details').focus()
}

function closeDetails() {
  detailRoot.innerHTML = ''
  document.body.classList.remove('no-scroll')
}

filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]')
  if (!button) return
  activeCategory = button.dataset.category
  renderFilters()
  renderProducts()
})

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product-id]')
  if (!button) return
  openDetails(products.find((product) => product.id === Number(button.dataset.productId)))
})

detailRoot.addEventListener('click', (event) => {
  if (event.target.matches('.detail-layer, #close-details')) closeDetails()
})

document.querySelector('#care-guide').addEventListener('click', () => openDetails(products[0]))

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && detailRoot.innerHTML) closeDetails()
})

renderFilters()
renderProducts()
