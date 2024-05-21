# API pour tester les requêtes XHR/Fetch dans votre application Flashy Coder

## À propos

> Cette API est spécifiquement conçue pour apprendre Vue.js dans le cadre du programme de certification DWWM (Développeur Web et Web Mobile) pour l'année 2023-2024.
Elle sera principalement utilisée pour tester les requêtes XHR/Fetch lors du développement d'une application Vue.js.
> Vous pouvez consulter la [documentation en ligne](https://dwwm.gregdesplaces.com/api/v1).

## Pour commencer

1. Assurez-vous d'avoir [NodeJS](https://nodejs.org/) et [npm](https://www.npmjs.com/) installés.
2. Installez vos dépendances

    ```
    cd api # Naviguez vers le dossier api
    npm install # Installez les dépendances du projet
    npm run migrate # Exécutez les migrations pour configurer la base de données sqlite
   
    ```
3. Démarrez votre application

    ```
    npm run dev # Lancez le serveur de développement
    ```

4. Installer des fixtures

    Laisser le serveur en cours d'exécution et ouvrir un autre terminal pour installer des fixtures.

    ```
    npm run fixtures # Installez des fixtures pour tester l'API
    ```
   
5. Accéder aux données

Une fois le serveur lancé, votre API est accessible à l'adresse suivante : [https://localhost:3030/api/v1](https://localhost:3030/api/v1)