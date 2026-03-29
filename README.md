# KINETIC_TERMINAL // PORTFOLIO

Bienvenue sur **Kinetic Terminal**, le portfolio de **Rayhan** (OP_ID: 992-DELTA-X / SYSTEM_IDENT: RAYHAN_DEV). Ce projet est une expérience visuelle immersive s'inspirant des interfaces informatiques d'anciennes générations, du cyberpunk, et de l'esthétique "Terminal / Neo-Data".

Construit sur une architecture web moderne, ce portfolio sert à la fois de vitrine technologique et de CV interactif et s'articule comme le "hub d'un opérateur système".

## 🚀 Noeuds de navigation (Pages)

L'application est divisée en plusieurs fragments accessibles via un menu persistant :

*   **[ Home ]** : Interface d'accueil avec dashboard de télémetrie et aperçu rapide du profil.
*   **[ Operator Profile ]** : Dossier personnel avec les attributs techniques de l'opérateur (logique, créativité, optimisation) sous forme de statistiques RPG.
*   **[ Mission Log ]** : Historique des déploiements et des projets majeurs formatés en grille stylisée (Bento grid).
*   **[ Skill Tree ]** : Arborescence de compétences (Data Engineering, Machine Learning, Stat Analysis, etc.) avec barres d'aptitudes synchronisées.
*   **[ Experience Timeline ]** : Frise chronologique duale retraçant les missions professionnelles passées (et la formation académique).
*   **[ Side Quests ]** : Espace regroupant les expérimentations et objectifs annexes de l'opérateur.
*   **[ Decrypt Demos ]** : Zone d'expérimentation visuelle (composants fracturés, terminaux système, déchiffrement simulé).

## 🛠 Stack Technique

*   **Framework :** [Next.js (App Router)](https://nextjs.org/)
*   **Styles & UI :** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Composants Optimisés :** Le module natif `<Image />` de Next.js (`next/image`) est massivement exploité pour un chargement et une compression ultra-rapides.
*   **Typographies :** Polices d'écriture Google avec `next/font` (*Space Grotesk* pour les affichages terminaux et titres, *Inter* pour la lisibilité).
*   **Iconographie :** *Google Material Symbols (Outlined)* configurés en mode "Filled".

## 💻 Guide d'installation rapide

Pour amorcer la séquence de lancement locale sur votre propre système :

1.  **Récupérer l'archive (Clone)**
    ```bash
    git clone https://github.com/RashOps/portfolio.git
    cd portfolio
    ```

2.  **Compiler les dépendances (Install)**
    ```bash
    npm install
    # ou
    bun install
    ```

3.  **Lancer le flux local (Dev Server)**
    ```bash
    npm run dev
    # ou
    bun run dev
    ```

4.  **Accéder à l'interface**
    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre explorateur réseau.

## 🎨 Historique de Refonte

Initialement composé à partir de multiples maquettes visuelles statiques, le projet a profité d'une harmonisation totale sur Next.js :
- Création d'un layout global (`AppLayout`) pour fluidifier la navigation sous la forme neutre et réactive d'une SPA (Single Page Application).
- Centralisation des tokens de couleurs (`primary`, `secondary`, `tertiary`) et des effets d'overlay (fond scanline, ombres portées) grâce dans un schéma commun par Tailwind CSS v4.
- **Rapatriement des assets** : remplacement complet des dépendances cloud externes par du stockage et de l'optimisation locale côté serveur public.

---
*> // STATUS: ONLINE // ENCRYPTION: SECURE // UPLINK: STABLE*
