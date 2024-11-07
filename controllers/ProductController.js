const Product = require("../models/Product");

const homePage = async (req, res) => {
    try {
        products = await Product.find();
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, description } = req.body;

        const newProd = await Product.create({
            name,
            description,
        });

        return res.status(200).json({ message: "Product added" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.deleteMany();
        return res.status(200).json({ message: "Products deleted" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { homePage, addProduct, deleteProduct };
