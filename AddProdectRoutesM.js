// AddProdectRoutesM.js
const express = require('express');
const router = express.Router();
const Product = require('./ProductModel');

router.post('/addProduct', async (req, res) => {
  const { productName, price, amount, description } = req.body;

  try {
    const newProduct = new Product({
      productName,
      price,
      amount,
      description,
    });

    await newProduct.save();
    // Redirect the browser after successfully saving the product
    res.redirect('/product/getAllProducts');
  } catch (error) {
    res.status(500).send('Error adding product');
  }
});

router.get('/getAllProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error getting products');
  }
});

module.exports = router;
