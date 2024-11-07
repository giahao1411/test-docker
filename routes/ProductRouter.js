const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.homePage);

router.post("/", ProductController.addProduct);

router.delete("/", ProductController.deleteProduct);

module.exports = router;
