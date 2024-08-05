const express = require('express');
const Product = require('../models/Product')
const router = express.Router(); //mini instance 



router.get('/products', async(req,res) =>{
    let products = await Product.find({})//.find() is a mongoose method and we are using this because we want to take the data from database and want to render on the index page
    res.render('index', {products});
})


module.exports = router;