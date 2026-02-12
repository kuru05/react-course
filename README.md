# Projet de Cours React

Une application web full-stack construite avec un frontend React et un backend Express.js. Ce projet sert de plateforme d'apprentissage pour les concepts React, incluant les composants, la gestion d'état et l'intégration d'API.

## 🚀 Fonctionnalités

- **Gestion des Produits**: Afficher une liste de produits avec images et prix.
- **Ajout de Produits**: Interface pour ajouter de nouveaux produits au backend (en mémoire).
- **Interface UI Interactive**: Design moderne et responsive avec des effets de glassmorphisme.
- **API REST**: Serveur Express simple gérant les données des produits.

## 🛠️ Stack Technique

### Frontend
- **React 19**: Bibliothèque UI.
- **CSS3**: Styles personnalisés avec variables, grid/flexbox, et animations.
- **Create React App**: Structure du projet.

### Backend
- **Node.js**: Environnement d'exécution.
- **Express 5**: Framework web pour l'API.
- **CORS**: Middleware pour gérer le partage de ressources cross-origin.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)

## ⚙️ Installation & Configuration

Ce projet nécessite l'exécution de deux terminaux séparés : un pour le backend et un pour le frontend.

### 1. Configuration du Backend

Le backend tourne sur le port `3001` et sert les données des produits.

```bash
# Naviguer dans le dossier backend
cd backend

# Installer les dépendances
npm install

# Démarrer le serveur
node server.js
```

L'utilisateur devrait voir : `Backend lancé sur http://localhost:3001`

### 2. Configuration du Frontend

Le frontend tourne sur le port `3000` (par défaut) et fait des requêtes au backend.

```bash
# Revenir au dossier racine (si vous étiez dans backend)
cd ..

# Installer les dépendances
npm install

# Démarrer l'application React
npm start
```

L'application s'ouvrira automatiquement à l'adresse `http://localhost:3000`.

## 🔌 Endpoints API

Le backend fournit les endpoints REST suivants :

- **GET** `/get-products`
  - Retourne la liste de tous les produits disponibles.
- **POST** `/new-product`
  - Ajoute un nouveau produit à la liste.
  - Corps de la requête : Objet JSON représentant le produit.

## 📁 Structure du Projet

```
cours/
├── backend/            # Serveur Express et logique backend
│   ├── server.js       # Point d'entrée principal pour l'API
│   └── package.json    # Dépendances du backend
├── src/                # Code source React
│   ├── assets/         # Fichiers statiques (images, styles globaux)
│   ├── components/     # Composants React (Fonctionnels & Classes)
│   ├── App.js          # Composant principal de l'application
│   └── index.js        # Point d'entrée pour React
├── public/             # Fichiers publics statiques
└── package.json        # Dépendances du frontend
```

## 📝 Licence

Ce projet est à but éducatif, une partie "Anciens exercices" permet de voir l'avancement du module REACT.
