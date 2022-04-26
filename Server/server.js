import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";

dotenv.config();
connectDatabase();
const app = express();
const PORT = process.env.PORT || 1000;

//Load products from server
app.get("/api/products", (req, res) => {
    res.json(products);
});

//Load single product from server
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/", (req, res) => {
    res.send("API is Running...");
});

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});
