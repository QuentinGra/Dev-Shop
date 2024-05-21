/**
 * Ce script initialise la base de données avec les données de base de l'application.
 *
 * @module fixtures
 */

// Importation des modules et des données nécessaires
import administrator from '../administrator.json' assert { type: 'json' };
import config from '../../config/default.json' assert { type: 'json' };
import categories from './categories.json' assert { type: 'json' };
import products from './products.json' assert { type: 'json' };

/**
 * Fonction pour faire une requête POST à une URL spécifiée avec les données fournies.
 *
 * @param {string} endpoint - L'endpoint vers lequel la requête est faite.
 * @param {Object} data - Les données à envoyer dans le corps de la requête.
 * @returns {Promise<Response>} La réponse de la requête fetch.
 */
const post = (endpoint, data) => {
    return fetch(`${config.origins}/api/v1/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

/**
 * Fonction asynchrone pour initialiser la base de données.
 * Elle crée un utilisateur admin, des catégories et des produits.
 */
const fixtures = async () => {
    // Création d'un utilisateur admin
    const responseAdmin = await post('users', administrator);
    if (!responseAdmin.ok) {
        console.error(`Erreur lors de la création de l'admin : ${responseAdmin.statusText}`);
    } else {
        console.log(`Admin créé`);
    }

    // Création des catégories en bouclant sur les données des catégories
    for (const category of categories) {
        const responseCategory = await post('categories', category);
        if (!responseCategory.ok) {
            console.error(`Erreur lors de la création de la catégorie : ${responseCategory.statusText}`);
        } else {
            console.log(`Catégorie créée : ${category.name}`);
        }
    }

    // Création des produits en bouclant sur les données des produits
    for (const product of products) {
        const responseProduct = await post('products', product);
        if (!responseProduct.ok) {
            console.error(`Erreur lors de la création du produit : ${responseProduct.statusText}`);
        } else {
            console.log(`Produit créé : ${product.name}`);
        }
    }
};

// Appel de la fonction initDb et gestion des rejets de promesse possibles
fixtures()
    .then(() => console.log('Base de données initialisée'))
    .catch(() => console.error('Erreur lors de l\'initialisation de la base de données :'));