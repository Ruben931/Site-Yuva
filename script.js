// JERSEY ELITE - Ultra Premium JavaScript

// Premium Product Data
const products = [
    // Luxury City Teams Collection
    {
        id: 1,
        name: "PSG EDITION EXCLUSIVE",
        category: "clubs",
        price: 189.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "Paris Saint-Germain",
        league: "Ligue 1 Uber Eats"
    },
    {
        id: 2,
        name: "REAL MADRID ROYAL",
        category: "clubs",
        price: 195.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "Real Madrid CF",
        league: "LaLiga Santander"
    },
    {
        id: 3,
        name: "BARÇA LEGACY",
        category: "clubs",
        price: 192.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "FC Barcelona",
        league: "LaLiga Santander"
    },
    {
        id: 4,
        name: "CITY CHAMPIONS",
        category: "clubs",
        price: 191.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        team: "Manchester City",
        league: "Premier League"
    },
    {
        id: 5,
        name: "LIVERPOOL HERITAGE",
        category: "clubs",
        price: 189.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        team: "Liverpool FC",
        league: "Premier League"
    },
    {
        id: 6,
        name: "BAYERN ELITE",
        category: "clubs",
        price: 194.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "FC Bayern München",
        league: "Bundesliga"
    },
    
    // Luxury National Teams Collection
    {
        id: 7,
        name: "FRANCE TRICOLORE",
        category: "national",
        price: 185.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "Équipe de France",
        league: "UEFA Nations"
    },
    {
        id: 8,
        name: "BRASIL SELEÇÃO",
        category: "national",
        price: 183.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "Brasil",
        league: "CONMEBOL"
    },
    {
        id: 9,
        name: "ARGENTINA ALBICELESTE",
        category: "national",
        price: 187.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "Argentina",
        league: "CONMEBOL"
    },
    {
        id: 10,
        name: "DEUTSCHLAND MANNSCHAFT",
        category: "national",
        price: 184.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        team: "Deutschland",
        league: "UEFA Nations"
    },
    {
        id: 11,
        name: "ESPAÑA ROJA",
        category: "national",
        price: 186.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: false,
        team: "España",
        league: "UEFA Nations"
    },
    {
        id: 12,
        name: "PORTUGAL NAVEGADORES",
        category: "national",
        price: 188.00,
        image: "https://images.unsplash.com/photo-1602901248692-3b8dd2d57418?w=600&h=800&fit=crop",
        isNew: true,
        team: "Portugal",
        league: "UEFA Nations"
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

// Initialize Premium Experience
document.addEventListener('DOMContentLoaded', () => {
    initializeLuxuryExperience();
});

async function initializeLuxuryExperience() {
    // Show loader
    await simulateLoading();
    
    // Initialize components
    setupEventListeners();
    displayProducts();
    initializeScrollEffects();
    initializeAnimations();
}

// Premium Loading Experience
async function simulateLoading() {
    return new Promise(resolve => {
        setTimeout(() => {
            loader.classList.add('hide');
            document.body.style.overflow = 'visible';
            resolve();
        }, 2000);
    });
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Mobile navigation
    document.querySelectorAll('#mobileNav a[data-category]').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Sort with animation
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        animateProductChange();
    });

    // Search with debounce
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
}

// Navigation Handler
function handleNavClick(e) {
    e.preventDefault();
    
    const category = e.target.closest('a').dataset.category;
    if (!category) return;
    
    currentCategory = category;
    
    // Update active state with animation
    document.querySelectorAll('.nav-link, #mobileNav a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
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
    productsGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        displayProducts();
        productsGrid.style.opacity = '1';
        productsGrid.style.transform = 'translateY(0)';
    }, 300);
}

function displayProducts() {
    const filtered = filterProducts();
    const sorted = sortProducts(filtered);
    
    if (sorted.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full no-results">
                <i class="fas fa-search"></i>
                <h3 class="text-3xl font-bebas tracking-wider mb-2">AUCUN RÉSULTAT</h3>
                <p>Modifiez vos critères de recherche</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = sorted.map((product, index) => 
        createLuxuryProductCard(product, index)
    ).join('');
    
    // Animate products on load
    animateProductsOnLoad();
}

// Filter Products
function filterProducts() {
    let filtered = products;
    
    if (currentCategory !== 'tous') {
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
            sorted.sort((a, b) => b.isNew - a.isNew);
            break;
    }
    
    return sorted;
}

// Create Luxury Product Card
function createLuxuryProductCard(product, index) {
    const categoryName = product.category === 'clubs' ? 'CLUB EDITION' : 'NATION EDITION';
    const animationDelay = index * 0.1;
    
    return `
        <div class="product-card gpu-accelerated" style="animation-delay: ${animationDelay}s">
            ${product.isNew ? '<span class="product-badge">NOUVEAU</span>' : ''}
            <div class="overflow-hidden">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image"
                     loading="lazy">
            </div>
            <div class="product-info">
                <p class="product-category">${categoryName}</p>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-team">${product.team}</p>
                <div class="flex items-center justify-between mt-6">
                    <span class="product-price">€${product.price.toFixed(2)}</span>
                    <button class="btn-luxury" onclick="handleOrder('${product.name}')">
                        COMMANDER
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Animate Products on Load
function animateProductsOnLoad() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Header effect
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Parallax effect for hero
        const hero = document.querySelector('.hero-image');
        if (hero) {
            hero.style.transform = `translateY(${currentScroll * 0.5}px)`;
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Handle Order (Redirect to Snapchat)
function handleOrder(productName) {
    const message = `Bonjour, je souhaite commander le maillot ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Animate button click
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
        // Redirect to contact section
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 200);
}

// Utility: Debounce
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
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add luxury cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Premium console message
console.log('%cJERSEY ELITE', 'font-size: 50px; font-weight: bold; color: #D4AF37; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%cCollection Premium 2024', 'font-size: 16px; color: #666;');
console.log('%c🇫🇷 Designed with passion in France', 'font-size: 14px; color: #999;'); 