// Données des maillots
const maillots = [
    {
        id: 1,
        nom: "Maillot PSG Domicile 2024",
        categorie: "football",
        prix: 89.99,
        description: "Maillot officiel du Paris Saint-Germain",
        popularite: 5,
        nouveau: true,
        rating: 4.8
    },
    {
        id: 2,
        nom: "Maillot Lakers Away",
        categorie: "basketball",
        prix: 75.50,
        description: "Maillot authentique des Los Angeles Lakers",
        popularite: 4,
        nouveau: false,
        rating: 4.6
    },
    {
        id: 3,
        nom: "Maillot All Blacks",
        categorie: "rugby",
        prix: 95.00,
        description: "Maillot légendaire de l'équipe de Nouvelle-Zélande",
        popularite: 5,
        nouveau: true,
        rating: 4.9
    },
    {
        id: 4,
        nom: "Maillot Real Madrid",
        categorie: "football",
        prix: 82.99,
        description: "Maillot blanc mythique du Real Madrid",
        popularite: 5,
        nouveau: false,
        rating: 4.7
    },
    {
        id: 5,
        nom: "Maillot Warriors Home",
        categorie: "basketball",
        prix: 69.99,
        description: "Maillot domicile Golden State Warriors",
        popularite: 4,
        nouveau: false,
        rating: 4.5
    },
    {
        id: 6,
        nom: "Maillot France Rugby",
        categorie: "rugby",
        prix: 78.00,
        description: "Maillot bleu de l'équipe de France de rugby",
        popularite: 4,
        nouveau: true,
        rating: 4.4
    },
    {
        id: 7,
        nom: "Polo Wimbledon",
        categorie: "tennis",
        prix: 65.00,
        description: "Polo officiel du tournoi de Wimbledon",
        popularite: 3,
        nouveau: false,
        rating: 4.2
    },
    {
        id: 8,
        nom: "Maillot Barcelona",
        categorie: "football",
        prix: 85.99,
        description: "Maillot blaugrana du FC Barcelone",
        popularite: 5,
        nouveau: true,
        rating: 4.8
    },
    {
        id: 9,
        nom: "Maillot Bulls Chicago",
        categorie: "basketball",
        prix: 79.99,
        description: "Maillot rouge iconique des Chicago Bulls",
        popularite: 5,
        nouveau: false,
        rating: 4.9
    },
    {
        id: 10,
        nom: "Polo Roland Garros",
        categorie: "tennis",
        prix: 55.00,
        description: "Polo élégant du tournoi Roland Garros",
        popularite: 3,
        nouveau: true,
        rating: 4.1
    }
];

// Variables globales
let maillotsAffiches = [...maillots];
let categorieActive = 'tous';
let triActuel = 'nom';

// Éléments DOM
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const productsGrid = document.getElementById('productsGrid');

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    afficherMaillots();
    attachEventListeners();
});

// Gestion du thème
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Initialiser le tooltip correctement
    const tooltip = savedTheme === 'dark' ? 'Mode clair' : 'Mode sombre';
    themeToggle.setAttribute('data-tooltip', tooltip);
    themeToggle.setAttribute('aria-label', tooltip);
    
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Ajouter un effet de feedback visuel
    themeToggle.style.transform = 'scale(0.95)';
    
    // Changer le thème avec une légère animation
    setTimeout(() => {
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Restaurer la taille du bouton
        themeToggle.style.transform = 'scale(1)';
        
        // Ajouter un petit effet de "success"
        themeToggle.style.boxShadow = newTheme === 'dark' 
            ? '0 0 20px rgba(240, 147, 251, 0.6), 0 4px 20px rgba(0, 0, 0, 0.3)'
            : '0 0 20px rgba(102, 126, 234, 0.6), 0 4px 20px rgba(0, 0, 0, 0.1)';
        
        setTimeout(() => {
            themeToggle.style.boxShadow = '';
        }, 500);
        
    }, 100);
}

function updateThemeIcon(theme) {
    // Le nouveau bouton thème utilise CSS pour l'animation du slider
    // Pas besoin de modifier les icônes, elles sont fixes et l'animation 
    // se fait automatiquement via [data-theme="dark"] .theme-toggle-inner::before
    
    // Mettre à jour le tooltip
    const tooltip = theme === 'dark' ? 'Mode clair' : 'Mode sombre';
    themeToggle.setAttribute('data-tooltip', tooltip);
    themeToggle.setAttribute('aria-label', tooltip);
    
    // Optionnel : ajouter une petite animation au clic
    const toggleInner = themeToggle.querySelector('.theme-toggle-inner');
    if (toggleInner) {
        toggleInner.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleInner.style.transform = 'scale(1)';
        }, 150);
    }
}

// Event listeners
function attachEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categorie = e.target.getAttribute('data-category') || 
                             e.target.closest('.nav-link').getAttribute('data-category');
            const linkElement = e.target.closest('.nav-link');
            changerCategorie(categorie, linkElement);
            
            // Fermer le menu mobile après sélection
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    sortSelect.addEventListener('change', (e) => {
        triActuel = e.target.value;
        trierMaillots();
    });
    
    searchInput.addEventListener('input', (e) => {
        rechercherMaillots(e.target.value);
    });
    
    // Fermer le menu mobile en cliquant en dehors
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !navbar.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            navbar.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navbar.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Gestion du scroll pour la navbar
    window.addEventListener('scroll', handleScroll);

    // Défilement fluide vers la section contact
    document.querySelector('.contact-nav-link').addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Gestion de l'effet scroll sur la navbar
function handleScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Gestion des catégories
function changerCategorie(categorie, element) {
    // Mettre à jour l'état actif
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    
    categorieActive = categorie;
    filtrerParCategorie();
}

function filtrerParCategorie() {
    if (categorieActive === 'tous') {
        maillotsAffiches = [...maillots];
    } else {
        maillotsAffiches = maillots.filter(maillot => maillot.categorie === categorieActive);
    }
    
    // Appliquer le tri actuel
    trierMaillots();
}

// Système de tri
function trierMaillots() {
    switch (triActuel) {
        case 'nom':
            maillotsAffiches.sort((a, b) => a.nom.localeCompare(b.nom));
            break;
        case 'prix-asc':
            maillotsAffiches.sort((a, b) => a.prix - b.prix);
            break;
        case 'prix-desc':
            maillotsAffiches.sort((a, b) => b.prix - a.prix);
            break;
        case 'popularite':
            maillotsAffiches.sort((a, b) => b.popularite - a.popularite);
            break;
        case 'nouveau':
            maillotsAffiches.sort((a, b) => b.nouveau - a.nouveau);
            break;
    }
    
    afficherMaillots();
}

// Système de recherche
function rechercherMaillots(terme) {
    const termeLower = terme.toLowerCase();
    
    if (termeLower === '') {
        filtrerParCategorie();
        return;
    }
    
    let maillotsFilters = categorieActive === 'tous' ? [...maillots] : 
        maillots.filter(maillot => maillot.categorie === categorieActive);
    
    maillotsAffiches = maillotsFilters.filter(maillot => 
        maillot.nom.toLowerCase().includes(termeLower) ||
        maillot.description.toLowerCase().includes(termeLower) ||
        maillot.categorie.toLowerCase().includes(termeLower)
    );
    
    trierMaillots();
}

// Affichage des maillots
function afficherMaillots() {
    productsGrid.innerHTML = '';
    
    if (maillotsAffiches.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun maillot trouvé pour cette recherche.</p>
            </div>
        `;
        return;
    }
    
    maillotsAffiches.forEach(maillot => {
        const card = creerCarteMaillot(maillot);
        productsGrid.appendChild(card);
    });
}

function creerCarteMaillot(maillot) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <i class="fas fa-tshirt"></i>
        </div>
        <div class="product-info">
            <div class="product-category">${capitalizeFirst(maillot.categorie)}</div>
            <h3 class="product-name">${maillot.nom}</h3>
            <p class="product-description">${maillot.description}</p>
            <div class="product-footer">
                <span class="product-price">${maillot.prix.toFixed(2)} €</span>
                <div class="product-rating">
                    ${genererEtoiles(maillot.rating)}
                    <span style="margin-left: 0.5rem; color: var(--text-muted);">${maillot.rating}</span>
                </div>
            </div>
            ${maillot.nouveau ? '<div class="nouveau-badge">✨ NOUVEAU</div>' : ''}
        </div>
    `;
    
    // Ajouter la classe pour le badge nouveau
    if (maillot.nouveau) {
        card.style.position = 'relative';
    }
    
    return card;
}

function genererEtoiles(rating) {
    const etoilesCompletes = Math.floor(rating);
    const etoileDemi = rating % 1 >= 0.5;
    const etoilesVides = 5 - etoilesCompletes - (etoileDemi ? 1 : 0);
    
    let html = '';
    
    // Étoiles complètes
    for (let i = 0; i < etoilesCompletes; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    
    // Étoile demi
    if (etoileDemi) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Étoiles vides
    for (let i = 0; i < etoilesVides; i++) {
        html += '<i class="far fa-star"></i>';
    }
    
    return html;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Gestion du menu mobile
function toggleMobileMenu() {
    navbar.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Empêcher le scroll quand le menu est ouvert
    if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    navbar.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
} 