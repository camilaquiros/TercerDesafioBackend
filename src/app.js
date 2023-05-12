import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

// Crear nueva instancia de la clase
const productManager = new ProductManager('./src/products.json')

app.use(express.urlencoded({extended: true}))

//Mostrar un limite de productos desde el inicio(Ej: http://localhost:8080/products?limit=5) o Mostrar todos los productos si no se asigna un limite(Ej: http://localhost:8080/products)
app.get('/products', async (req, res) => {
    const products = await productManager.getProducts();
    const {limit} = req.query;
    if(limit != undefined){
        const productLimited = products.slice(0,limit);
        res.send(productLimited)
    } else {
        res.send(products)
    }
});

//Muestra un solo producto según id(Ej: http://localhost:8080/products/2), si no existe tira un status 404 y un mensaje de error(Ej: http://localhost:8080/products/26)
app.get('/products/:pid', async (req, res) => {
    const {pid} = req.params;
    const products = await productManager.getProducts();
    const product = products.find((product) => product.id == pid);
    if(product) return res.send(product); 
    else res.status(404).send('Producto no encontrado');
})

app.listen(8080, () => {
    console.log('Escuchando puerto 8080')
});



