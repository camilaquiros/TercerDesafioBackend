import express from "express";
// import ProductManager from "../ProductManager";

const app = express();

app.get('/products', (req, res) => {
    res.send('texto')
});

app.listen(8080, () => console.log('Escuchando puerto 8080'));



