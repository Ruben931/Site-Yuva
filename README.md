# 🏆 Maillots Collection - Site Web

Un site web moderne et responsive pour présenter une collection de maillots de sport avec des fonctionnalités avancées de tri et de filtrage.

## ✨ Fonctionnalités

### 🎨 Thèmes
- **Mode Sombre/Clair** : Basculement facile entre les thèmes avec sauvegarde de la préférence
- Interface moderne avec transitions fluides

### 📂 Catégories
- **Football** : Maillots des grands clubs européens
- **Basketball** : Maillots NBA iconiques
- **Rugby** : Maillots des équipes nationales
- **Tennis** : Polos des grands tournois
- **Tous** : Affichage de toute la collection

### 🔍 Système de Tri
- **Par nom** : Ordre alphabétique
- **Par prix** : Croissant ou décroissant
- **Par popularité** : Les plus populaires en premier
- **Par nouveauté** : Les dernières sorties

### 🔎 Recherche
- Recherche en temps réel par nom, description ou catégorie
- Résultats instantanés pendant la saisie

### 📱 Design Responsive
- Adaptatif sur tous les appareils (mobile, tablette, desktop)
- Interface moderne avec cartes produits élégantes
- Animations et effets de survol

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles avancés avec variables CSS
- **JavaScript Vanilla** : Fonctionnalités interactives
- **Font Awesome** : Icônes modernes

## 🚀 Comment Utiliser

1. Ouvrez le fichier `index.html` dans votre navigateur
2. Naviguez entre les catégories en cliquant sur les onglets
3. Utilisez le menu déroulant pour trier les maillots
4. Recherchez un maillot spécifique avec la barre de recherche
5. Basculez entre les modes sombre et clair avec le bouton en haut à droite

## 📦 Contenu Inclus

Le site contient actuellement 10 maillots d'exemple avec :
- Informations détaillées (nom, prix, description)
- Système de notation avec étoiles
- Badges "NOUVEAU" pour les dernières sorties
- Prix en euros
- Catégorisation par sport

## 🎯 Fonctionnalités Avancées

- **Sauvegarde du thème** : Le choix sombre/clair est mémorisé
- **Tri combiné** : Le tri s'applique aux résultats filtrés
- **Recherche intelligente** : Recherche dans tous les champs
- **Interface fluide** : Transitions CSS pour une expérience premium

## 🔧 Personnalisation

Pour ajouter de nouveaux maillots, modifiez le tableau `maillots` dans le fichier `script.js` :

```javascript
{
    id: 11,
    nom: "Nouveau Maillot",
    categorie: "football", // football, basketball, rugby, tennis
    prix: 99.99,
    description: "Description du maillot",
    popularite: 5, // 1-5
    nouveau: true, // true/false
    rating: 4.8 // 0-5
}
```

## 📄 Structure des Fichiers

```
├── index.html          # Page principale
├── styles.css          # Feuilles de style
├── script.js           # Logique JavaScript
└── README.md          # Documentation
```

## 🎨 Couleurs du Thème

### Thème Clair
- Primaire : #3498db (Bleu)
- Accent : #e74c3c (Rouge)
- Fond : #ffffff (Blanc)
- Surface : #f8f9fa (Gris clair)

### Thème Sombre  
- Fond : #1a1a1a (Noir)
- Surface : #2d2d2d (Gris foncé)
- Texte : #ffffff (Blanc)

---

**Développé avec ❤️ pour une expérience utilisateur optimale** 