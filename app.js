const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

let cards = {
    1: {
        name: "Mostrar los TODOS en la web en React",
        column: "TODO",
        description: "Llamar a la API del proyecto de Backend y muestra el listado de tarjetas del TODO"
    },
    2: {
        name: "Crear un TODO en la web de React",
        column: "TODO",
        description: "Añadir una nueva tarjeta al TODO llamando a la API del proyecto de backend"
    },
    3: {
        name: "Eliminar un TODO en la web de React",
        column: "TODO",
        description: "Elimina una tarjeta del TODO llamando a la API del proyecto de backend"
    }
};

app.use(bodyParser.json());

app.get('/cards', (req, res) => {
    const todosArray = Object.keys(cards).map((key) => {
        return {[key]: cards[key]}
    });
    res.status(200).send(cards);
});

app.get('/cards/:id', (req, res) => {
    res.status(200).send(cards[req.params.id]);
});

app.post('/cards/:id', (req, res) => {
    cards[req.params.id] = req.body;
    res.status(200).end();
});

app.delete('/cards/:id', (req, res) => {
    delete cards[req.params.id];
    res.status(200).end();
});

app.listen(3000, () => console.log('Server started'));