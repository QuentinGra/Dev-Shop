# TP Boutique - Part 1 : Mise en place de l'architecture

## Étape 1 : Configuration du projet

### 1. **Création d'un nouveau projet Vue.js :**
- Utilisez `vue-create` pour créer un nouveau projet Vue.js. La documentation officielle est disponible [ici](https://vuejs.org/guide/quick-start).
- Vous utiliserez typescript, prettier et eslint pour ce projet. Les autres options ne doivent pas être choisies (On verra plus tard).
- Pour les styles, vous utiliserez SCSS, il faudra donc l'ajouter aux dépendances de développement du projet. Pour cela, vous pouvez utiliser `npm`. La documentation officielle est disponible [ici](https://www.npmjs.com/package/sass).

### 2. **Chargement des polices de caractères :**
- Pour charger les polices de caractères, vous pouvez utiliser Google Fonts : [Google Fonts](https://fonts.google.com/).
- Choisissez une police pour les titres et une autre pour le texte.
- Vous créerez un partial `_variables.scss` dans le dossier `src/assets/scss` qui sera importé dans le `main.ts` pour être utilisé dans tout le projet.
- Vous créerez un fichier `_base.scss` dans le dossier `src/assets/scss` qui contiendra les styles de base du projet (notamment les polices des headings).

### 3. **Installation de Bootstrap et Bootstrap Icons :**
- Pour ajouter Bootstrap à votre projet, il va falloir les ajouter aux dépendances du projet. Pour cela, vous pouvez utiliser `npm` . La documentation officielle est disponible [ici](https://getbootstrap.com/docs/5.3/getting-started/download/#package-managers).
- Pour Bootstrap Icons, référez-vous à la documentation officielle ici : [Bootstrap Icons](https://icons.getbootstrap.com/).
- Il faudra aussi ajouter bootstrap à tout le projet :
  - en important un partial `_bootstrap.scss` dans le `main.ts` qui importera les fichiers nécessaires de bootstrap.
  - avant l'import, vous pouvez écraser les variables de bootstrap dans ce fichier pour les adapter à votre projet.

> Voici les variables que vous pouvez écraser (remplacer les valeurs par vos propres variables) :
> ```scss
> /* COLORS */
> $primary:       $ma_couleur_principale;
> $secondary:     $ma_couleur_secondaire;
> $success:       $ma_couleur_succes;
> $info:          $ma_couleur_info;
> $warning:       $ma_couleur_warning;
> $danger:        $ma_couleur_danger;
> 
> /* FONT */
> $font-family-sans-serif: $ma_police_sans_serif;
> $font-family-monospace: $ma_police_monospace;
> ```


## Étape 2 : Mise en place de la Navbar

> Tout ce que vous allez faire doit-être responsive. Vous pouvez utiliser les classes de Bootstrap pour cela (grille, flexbox, etc.).
> Utilisez au plus possibles les SFC dès que votre code semble se répéter.

Vous mettrez la Navbar dans un fichier `TheHeader.vue` dans le dossier `src/components`.

### 1. **Partie gauche de la Navbar :**
- Ajoutez un logo à la Navbar.
- Créer un menu avec :
  - un lien vers la page d'accueil
  - des élements `test` avec un dropdown.

### 2. **Partie droite :**
- Un icon de panier.
- Un lien qui mènera vers une page de connexion
- Un menu dropdown pour basculer entre le thème clair, le thème sombre et le thème auto.

### 3. **Exemples possibles**

|                       Desktop                       |                      Mobile                       |
|:---------------------------------------------------:|:-------------------------------------------------:|
| ![Navbar Desktop](./docs/assets/navbar-desktop.jpg) | ![Navbar Mobile](./docs/assets/navbar-mobile.jpg) |

## Étape 3 : Mise en place de la Partie Principale

La partie principale sera dans un fichier `Home.vue` dans le dossier `src/pages` ou `src/views`.

### 1. **Utilisation de Bootstrap Cards :**
- Explorez la documentation de Bootstrap pour créer des cards : [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/).
- Ajoutez une image, un titre, un prix et un bouton d'ajout au panier à chaque card (voir les exemples ci-dessous).

### 2. **Utiliser les SFC**
- Créer les composants `ProductCard` et `ProductList`, essayez de vous organiser au mieux en utilisant aussi les balises sémantiques de HTML5.

### 3. **Exemples possibles**

|                     Desktop                     |                    Mobile                     |
|:-----------------------------------------------:|:---------------------------------------------:|
| ![Main Desktop](./docs/assets/main-desktop.jpg) | ![Main Mobile](./docs/assets/main-mobile.jpg) |

## Étape 4 : Mise en place du Footer

### 1. **Généralités :**

Le footer sera dans un fichier `TheFooter.vue` dans le dossier `src/components`.
Il sera composé de deux parties : une partie gauche et une partie droite, le tout dans une `div` avec la classe `container`.

### 2. **Partie droite : les réseaux sociaux**
- Ajoutez des liens vers les réseaux sociaux.
- Utilisez les icônes de Bootstrap Icons pour les réseaux sociaux : [Bootstrap Icons](https://icons.getbootstrap.com/).

### 3. **Partie gauche : le copyright**
- Ajoutez un texte avec le nom de votre boutique.

### 4. **Exemples possibles**

|                       Desktop                       |                      Mobile                       |
|:---------------------------------------------------:|:-------------------------------------------------:|
| ![Footer Desktop](./docs/assets/footer-desktop.jpg) | ![Footer Mobile](./docs/assets/footer-mobile.jpg) |

## Étape 5 : Mise en place de la zone de filtres

### 1. **Généralités :**
- La zone de filtres sera dans un fichier `ProductFilters.vue` dans le dossier `src/components`.
- Il s'affichera à gauche de la liste des produits (vous pouvez utiliser la grille de Bootstrap pour cela).
- Il contiendra :
  - une barre de recherche
  - des filtres pour les catégories et les prix (boutons radio ou cases à cocher).

### 2. **Exemples possibles**
|                      Desktop                       |                      Mobile                      |
|:--------------------------------------------------:|:------------------------------------------------:|
| ![Filter Desktop](./docs/assets/aside-desktop.jpg) | ![Filter Mobile](./docs/assets/aside-mobile.jpg) |


## Rendu global possible

|             |                               Desktop                                |                               Mobile                               |
|:------------|:--------------------------------------------------------------------:|:------------------------------------------------------------------:|
| Sans filtre |           ![Main Desktop](./docs/assets/main-desktop.jpg)            |           ![Main Mobile](./docs/assets/main-mobile.jpg)            |
| Avec filtre | ![Main Desktop Filters](./docs/assets/main-desktop-with-filters.jpg) | ![Main Mobile Filters](./docs/assets/main-mobile-with-filters.jpg) |
| Avec Menu   |    ![Main Desktop Menu](./docs/assets/main-desktop-with-menu.jpg)    |    ![Main Mobile Menu](./docs/assets/main-mobile-with-menu.jpg)    |