const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express hbs
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');
const data = {
    nombre: 'Pepito romero'
};

app.get('/', (req, res) => {
    res.render('home', data);
});

app.get('/about', (req, res) => {
    res.render('about', data);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("Escuchando peticiones en puerto " + port);
});