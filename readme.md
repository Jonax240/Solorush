# 🚀 SoloRush - Portfolio Full Stack

## 📌 Présentation

SoloRush est un projet de portfolio Full Stack visant à développer une application web avec React et TypeScript côté frontend, et Node.js avec Express côté backend.

Ce projet permet de mettre en pratique les compétences acquises en développement web, en conception d'API et en gestion de bases de données.

## 🛠️ Technologies utilisées

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS v4

### Backend

- Node.js
- Express

### Base de données

- À définir

## 📂 Architecture du projet

```text
SoloRush/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── backend/
├── .gitignore
└── README.md
```

## ⚙️ Installation

### Prérequis

- Node.js
- npm
- Git

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
```

_La commande de démarrage du backend sera précisée selon les scripts configurés dans son `package.json`._

## 📈 Avancement du projet

### Initialisation

- [x] Création du README
- [x] Initialisation du frontend React + TypeScript
- [x] Initialisation du backend Express
- [x] Configuration de Tailwind CSS v4
- [x] Restauration de Font Awesome 6.4.0 via CDN.
- [x] Migration de l'ancien portfolio

### Backend

- [x] Initialisation du serveur Express
- [x] Création de la route d'accueil GET `/`
- [ ] Développement des routes de l'API
- [ ] Connexion à la base de données
- [ ] Création du modèle de données

### Gestion de projet

- [ ] Création du Product Backlog
- [ ] Création du Sprint Backlog

## 📝 Journal de bord

### 23/11/2026

- Initialisation du frontend React + TypeScript.
- Initialisation du backend Express.

### 24/11/2026

**Configuration**

- Configuration de Tailwind CSS v4.
- Transfert des ressources publiques de l'ancien portfolio (CV, aperçu du CV et logo).

**Migration React vers TypeScript**

- Conversion de `Navbar.jsx` en `Navbar.tsx`.
- Conversion de `Hero.jsx` en `Hero.tsx`.
- Conversion de `Journey.jsx` en `Journey.tsx`.
- Conversion de `Skills.jsx` en `Skills.tsx`.
- Conversion de `Project.jsx` en `Project.tsx`.
- Conversion de `Contact.jsx` en `Contact.tsx`.

**Améliorations TypeScript**

- Nettoyage du code et des états inutilisés.
- Création des types `Skill` et `SkillCategory`.
- Création du type `ProjectData`.
- Gestion des propriétés optionnelles et des valeurs nulles.
- Création des types `ProfileType` et `ProfileOption`.
- Typage des événements de formulaire.
- Nettoyage des clés React dans les méthodes `.map()`.

**Bilan : migration des six composants terminée.**
