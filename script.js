// JERSEY ELITE™ - Exceptional JavaScript Experience

// Premium Product Data with Enhanced Details
const products = [
    // Luxury City Teams Collection
    {
        id: 1,
        name: "PSG EDITION EXCLUSIVE",
        category: "clubs",
        price: 189.00,
        originalPrice: 229.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: true,
        team: "Paris Saint-Germain",
        league: "Ligue 1 Uber Eats",
        rating: 5,
        stock: 3
    },
    {
        id: 2,
        name: "REAL MADRID ROYAL",
        category: "clubs",
        price: 195.00,
        originalPrice: 245.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: false,
        team: "Real Madrid CF",
        league: "LaLiga Santander",
        rating: 5,
        stock: 7
    },
    {
        id: 3,
        name: "BARÇA LEGACY",
        category: "clubs",
        price: 192.00,
        originalPrice: 240.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: false,
        team: "FC Barcelona",
        league: "LaLiga Santander",
        rating: 5,
        stock: 5
    },
    {
        id: 4,
        name: "CITY CHAMPIONS",
        category: "clubs",
        price: 191.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        isLimited: false,
        team: "Manchester City",
        league: "Premier League",
        rating: 4.5,
        stock: 10
    },
    {
        id: 5,
        name: "LIVERPOOL HERITAGE",
        category: "clubs",
        price: 189.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        isLimited: false,
        team: "Liverpool FC",
        league: "Premier League",
        rating: 4.5,
        stock: 8
    },
    {
        id: 6,
        name: "BAYERN ELITE",
        category: "clubs",
        price: 194.00,
        originalPrice: 235.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: true,
        team: "FC Bayern München",
        league: "Bundesliga",
        rating: 5,
        stock: 2
    },
    
    // Luxury National Teams Collection
    {
        id: 7,
        name: "FRANCE TRICOLORE",
        category: "national",
        price: 185.00,
        originalPrice: 225.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: false,
        team: "Équipe de France",
        league: "UEFA Nations",
        rating: 5,
        stock: 12
    },
    {
        id: 8,
        name: "BRASIL SELEÇÃO",
        category: "national",
        price: 183.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: false,
        team: "Brasil",
        league: "CONMEBOL",
        rating: 5,
        stock: 15
    },
    {
        id: 9,
        name: "ARGENTINA ALBICELESTE",
        category: "national",
        price: 187.00,
        originalPrice: 230.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: true,
        team: "Argentina",
        league: "CONMEBOL",
        rating: 5,
        stock: 4
    },
    {
        id: 10,
        name: "DEUTSCHLAND MANNSCHAFT",
        category: "national",
        price: 184.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        isLimited: false,
        team: "Deutschland",
        league: "UEFA Nations",
        rating: 4.5,
        stock: 9
    },
    {
        id: 11,
        name: "ESPAÑA ROJA",
        category: "national",
        price: 186.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        isLimited: false,
        team: "España",
        league: "UEFA Nations",
        rating: 4.5,
        stock: 11
    },
    {
        id: 12,
        name: "PORTUGAL NAVEGADORES",
        category: "national",
        price: 188.00,
        originalPrice: 235.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        isLimited: true,
        team: "Portugal",
        league: "UEFA Nations",
        rating: 5,
        stock: 1
    }
];

// State Management
let currentCategory = 'tous';
let currentSort = 'nom';
let searchTerm = '';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Initialize Premium Experience
document.addEventListener('DOMContentLoaded', () => {
    initializeExceptionalExperience();
});

async function initializeExceptionalExperience() {
    // Show premium loader
    await showPremiumLoader();
    
    // Initialize all components
    initializeCustomCursor();
    setupEventListeners();
    displayProducts();
    initializeScrollEffects();
    initializeAnimations();
    initializeFilterTabs();
    updateProductCounts();
}

// Premium Loading Experience
async function showPremiumLoader() {
    return new Promise(resolve => {
        // Animate loader elements
        const loaderElements = loader.querySelectorAll('.loader-logo h1, .loader-logo h2, .loader-progress');
        
        setTimeout(() => {
            loader.classList.add('hide');
            document.body.style.overflow = 'visible';
            
            // Animate page entrance
            animatePageEntrance();
            resolve();
        }, 2500);
    });
}

// Custom Cursor
function initializeCustomCursor() {
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
        
        // Add hover effects
        const hoverElements = document.querySelectorAll('a, button, .product-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Mobile navigation
    document.querySelectorAll('.mobile-nav-link[data-category]').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Sort with smooth transition
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        animateProductChange();
    });

    // Search with advanced debounce
    searchInput.addEventListener('input', debounce((e) => {
        searchTerm = e.target.value.toLowerCase();
        animateProductChange();
    }, 300));

    // Mobile menu
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // ESC key to close mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Filter Tabs
function initializeFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active state
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter
            if (filter === 'nouveau') {
                currentCategory = 'tous';
                // Will filter by isNew in filterProducts
            } else {
                currentCategory = filter;
            }
            
            animateProductChange();
        });
    });
}

// Update Product Counts
function updateProductCounts() {
    const counts = {
        tous: products.length,
        clubs: products.filter(p => p.category === 'clubs').length,
        national: products.filter(p => p.category === 'national').length,
        nouveau: products.filter(p => p.isNew).length
    };
    
    document.querySelectorAll('.filter-count').forEach((count, index) => {
        const filters = ['tous', 'clubs', 'national', 'nouveau'];
        count.textContent = counts[filters[index]];
    });
}

// Navigation Handler
function handleNavClick(e) {
    e.preventDefault();
    
    const category = e.target.closest('a').dataset.category;
    if (!category) return;
    
    currentCategory = category;
    
    // Update active state with smooth transition
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
    
    // Update filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === category) {
            tab.classList.add('active');
        }
    });
    
    closeMobileMenu();
    animateProductChange();
}

// Mobile Menu Functions
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'visible';
}

function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// Premium Product Display
function animateProductChange() {
    productsGrid.style.opacity = '0';
    productsGrid.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        displayProducts();
        productsGrid.style.opacity = '1';
        productsGrid.style.transform = 'translateY(0)';
    }, 400);
}

function displayProducts() {
    const filtered = filterProducts();
    const sorted = sortProducts(filtered);
    
    if (sorted.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <i class="fas fa-search text-6xl text-luxury-gold opacity-30 mb-6"></i>
                <h3 class="text-4xl font-bebas tracking-wider mb-4">AUCUN RÉSULTAT</h3>
                <p class="text-gray-400">Essayez de modifier vos critères de recherche</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = sorted.map((product, index) => 
        createExceptionalProductCard(product, index)
    ).join('');
    
    // Animate products entrance
    animateProductsEntrance();
}

// Filter Products
function filterProducts() {
    let filtered = products;
    
    // Check if we're filtering by new products
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab && activeTab.dataset.filter === 'nouveau') {
        filtered = filtered.filter(p => p.isNew);
    } else if (currentCategory !== 'tous') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.team.toLowerCase().includes(searchTerm) ||
            p.league.toLowerCase().includes(searchTerm)
        );
    }
    
    return filtered;
}

// Sort Products
function sortProducts(products) {
    const sorted = [...products];
    
    switch (currentSort) {
        case 'nom':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'prix-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'prix-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'nouveau':
            sorted.sort((a, b) => {
                if (a.isNew === b.isNew) return 0;
                return a.isNew ? -1 : 1;
            });
            break;
    }
    
    return sorted;
}

// Create Exceptional Product Card
function createExceptionalProductCard(product, index) {
    const categoryName = product.category === 'clubs' ? 'CLUB EDITION' : 'NATION EDITION';
    const animationDelay = index * 0.1;
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    return `
        <div class="product-card gpu-accelerated" style="animation-delay: ${animationDelay}s">
            ${product.isNew ? '<span class="product-badge">NOUVEAU</span>' : ''}
            ${product.isLimited ? '<span class="product-badge limited" style="right: auto; left: 1.5rem;">LIMITED</span>' : ''}
            ${discount > 0 ? `<span class="product-badge discount" style="top: auto; bottom: 1.5rem;">-${discount}%</span>` : ''}
            
            <div class="product-image-wrapper overflow-hidden">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image"
                     loading="lazy">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                        <span>APERÇU RAPIDE</span>
                    </button>
                </div>
            </div>
            
            <div class="product-info">
                <p class="product-category">${categoryName}</p>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-team">${product.team}</p>
                
                <div class="product-rating mb-4">
                    ${generateStars(product.rating)}
                    <span class="text-xs text-gray-400 ml-2">(${product.rating})</span>
                </div>
                
                <div class="product-stock mb-4">
                    ${product.stock <= 3 ? 
                        `<span class="text-xs text-red-400"><i class="fas fa-fire"></i> Plus que ${product.stock} en stock</span>` : 
                        `<span class="text-xs text-gray-400"><i class="fas fa-check-circle"></i> En stock</span>`
                    }
                </div>
                
                <div class="flex items-center justify-between">
                    <div>
                        <span class="product-price">€${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? 
                            `<span class="product-original-price">€${product.originalPrice.toFixed(2)}</span>` : 
                            ''
                        }
                    </div>
                    <button class="btn-luxury small" onclick="handleOrder('${product.name}')">
                        <i class="fas fa-shopping-bag mr-2"></i>
                        COMMANDER
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate Star Rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-luxury-gold"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt text-luxury-gold"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-luxury-gold opacity-30"></i>';
    }
    
    return stars;
}

// Quick View Function
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeQuickView()">
                <i class="fas fa-times"></i>
            </button>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="modal-info">
                    <h2 class="text-4xl font-bebas mb-2">${product.name}</h2>
                    <p class="text-xl text-gray-400 mb-4">${product.team}</p>
                    <div class="mb-6">
                        ${generateStars(product.rating)}
                    </div>
                    <p class="text-3xl font-bebas text-luxury-gold mb-6">€${product.price.toFixed(2)}</p>
                    <p class="text-gray-300 mb-8">
                        Maillot officiel ${product.team} de la collection exclusive JERSEY ELITE™. 
                        Qualité premium garantie avec certificat d'authenticité.
                    </p>
                    <button class="cta-primary w-full" onclick="handleOrder('${product.name}'); closeQuickView();">
                        <span class="relative z-10">COMMANDER MAINTENANT</span>
                        <div class="cta-bg"></div>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// Close Quick View
function closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Animate Products Entrance
function animateProductsEntrance() {
    const cards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px) scale(0.9)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, parseFloat(entry.target.style.animationDelay) * 1000);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}

// Animate Page Entrance
function animatePageEntrance() {
    const elements = document.querySelectorAll('.animate-fade-up, .animate-text-reveal');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    let lastScroll = 0;
    let scrollTimer = null;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Header transformation
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Parallax effects
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(currentScroll * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        
        // Scroll indicator
        clearTimeout(scrollTimer);
        document.body.classList.add('scrolling');
        scrollTimer = setTimeout(() => {
            document.body.classList.remove('scrolling');
        }, 150);
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('stat-item')) {
                    animateNumber(entry.target.querySelector('h3'));
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll, .stat-item, .experience-item').forEach(el => {
        observer.observe(el);
    });
}

// Animate Numbers
function animateNumber(element) {
    const text = element.textContent;
    const number = parseInt(text);
    
    if (!isNaN(number)) {
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + text.replace(/\d+/g, '');
        }, 30);
    }
}

// Handle Order
function handleOrder(productName) {
    // Add ripple effect
    const button = event.target.closest('button');
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    
    // Show notification
    showNotification(`${productName} - Redirection vers Snapchat...`);
    
    // Smooth scroll to contact
    setTimeout(() => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 500);
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle mr-3"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Utility: Enhanced Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Premium Console Messages
console.log('%cJERSEY ELITE™', 'font-size: 60px; font-weight: bold; background: linear-gradient(135deg, #D4AF37, #F7E7CE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cHaute Couture Sportive', 'font-size: 20px; color: #D4AF37; font-style: italic;');
console.log('%c🇫🇷 Crafted with passion in France', 'font-size: 16px; color: #999;');

// Add CSS for new features
const style = document.createElement('style');
style.textContent = `
.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.quick-view-btn {
    background: var(--luxury-gold);
    color: var(--luxury-black);
    padding: 1rem 2rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.quick-view-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}

.product-badge.limited {
    background: var(--luxury-black);
    color: var(--luxury-gold);
    border: 1px solid var(--luxury-gold);
}

.product-badge.discount {
    background: #E53E3E;
}

.product-original-price {
    text-decoration: line-through;
    opacity: 0.5;
    font-size: 1rem;
    margin-left: 0.5rem;
}

.product-rating {
    display: flex;
    align-items: center;
}

.quick-view-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 2rem;
}

.quick-view-modal.active {
    opacity: 1;
}

.modal-content {
    background: var(--luxury-dark);
    border: 1px solid var(--luxury-gold);
    max-width: 1000px;
    width: 100%;
    padding: 3rem;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: var(--luxury-gold);
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.modal-close:hover {
    transform: rotate(90deg);
}

.notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--luxury-gold);
    color: var(--luxury-black);
    padding: 1rem 2rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 1000;
}

.notification.show {
    transform: translateX(0);
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple 0.6s ease-out;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.btn-luxury.small {
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem;
}

body.scrolling .custom-cursor {
    transform: translate(-50%, -50%) scale(0.8);
}
`;
document.head.appendChild(style); 