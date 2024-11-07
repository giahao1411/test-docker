const Product = require("../models/Product");

const homePage = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { homePage };
