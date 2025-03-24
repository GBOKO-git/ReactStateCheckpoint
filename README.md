# React Full Stack Dev - Profil Personne avec Composant Classe

Bienvenue dans ce projet React qui vous aide à comprendre la gestion d'état avec des composants de classe et à travailler avec le cycle de vie du composant. Vous y trouverez un exemple de profil de personne, où un bouton permet de basculer l'affichage d'un profil, et un champ affiche le temps écoulé depuis le montage du composant.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) sur votre machine.

## Cloner le repository

Commencez par cloner ce repository sur votre machine locale avec la commande suivante :

bash
git clone https://github.com/votre-utilisateur/votre-repository.git
cd votre-repository

# Installer les dépendances
Une fois dans le répertoire du projet, installez les dépendances nécessaires avec npm :
npm install

# Lancer le projet en mode développement
Une fois les dépendances installées, vous pouvez démarrer le serveur de développement avec la commande suivante :
npm start

Cela va lancer l'application et ouvrir votre navigateur à l'adresse http://localhost:3000.
# Fonctionnalités à tester
Affichage du profil : Le profil de la personne (nom, bio, image, profession) sera affiché. Un bouton vous permet de basculer l'affichage de la bio.
Temps écoulé : Un champ affiche le temps écoulé en secondes depuis le montage du composant, qui est mis à jour chaque seconde à l'aide d'un intervalle.
# Explication rapide du projet
Le projet utilise un composant de classe en React pour gérer l'état et le cycle de vie du composant.
L'état du composant contient :
Un objet personne avec les informations de la personne (nom, bio, image, profession).
Un booléen montre pour contrôler l'affichage de la bio.
Un champ elapsedTime qui calcule le temps écoulé depuis le montage du composant, à l'aide de la méthode setInterval.
Le bouton permet de basculer la visibilité de la bio, et le temps écoulé est mis à jour chaque seconde grâce à un intervalle démarré dans componentDidMount.
# Conclusion
Ce projet vous permet d'explorer la gestion de l'état et le cycle de vie des composants React dans un composant basé sur des classes. Vous pouvez étendre ce projet en ajoutant des fonctionnalités supplémentaires ou en personnalisant l'interface à votre convenance.
# Auteurs
Ce projet a été développé par AMARA GBOKO ANZOUMANAN



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
