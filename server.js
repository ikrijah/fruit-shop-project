// Import dépendences
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Créé une nouvelle application express 'app'
const app = express();


// Met le port du backet soit avec une variable d'environnement soit avec le port 5000
const port = process.env.PORT || 5000;

// Middleware permettant d'afficher les requêtes entrantes dans le serveur, utile pour voir les requêtes entrantes
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Bodyparser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// CORs configuration
app.use(cors());

// Require Route (dossier routes, fichier routes)
const api = require('./routes/routes');
// Configuration de l'app pour utiliser les routes 
app.use('/api/v1/', api);


// Middleware informant l'application express afin de servir les fichiers react
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch toutes les mauvaises requêtes
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure notre serveur afin d'écouter sur le port définié par la variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));