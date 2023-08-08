import { promises } from 'fs';

export default class ProductManager {
    products = [];
    product = Product;
    constructor(path){
        this.path = path;
    }

    async getProducts(){
        try {
            const database = await promises.readFile(this.path, "utf-8");
            const databaseParsed = JSON.parse(database)
            return databaseParsed;
        } catch(error) {
            console.log(error);
            return [];
        }
    }
}

class Product {
    contructor(title,category, price, description, image, stock) {
        this.id = id;
        this.title = title;
        this.category = category
        this.price = price;
        this.description = description;
        this.image = image;
        this.stock = stock;
    }
}