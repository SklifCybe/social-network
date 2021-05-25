const express = require('express');

const db = require('./src/assets/db');

const app = express();

const PORT = 3002;

app.get('/', (req, res) => {
    res.json(db);
});

app.listen(PORT, () => {
    console.log('server is work');
});