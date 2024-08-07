const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini instance 


//to show all the products
router.get('/products', async(req,res) =>{
    let products = await Product.find({})//.find() is a mongoose method and we are using this because we want to take the data from database and want to render on the index page
    res.render('products/index', {products});
})


//to show the form for new product
router.get('/product/new', (req,res)=>{
    res.render('products/new');
})

//to actually add the product
router.post('/products' , async(req, res) =>{
    let{name, price, img, desc} = req.body;
    await Product.create({name, price, desc, img});
    res.redirect('/products')
})


//to show a particular product
router.get('/products/:id', async(req, res) =>{
    let{id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('products/show', {foundProduct});
})

//form to edit the product
router.get('/products/:id/edit', async(req,res) =>{
    let{id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit', {foundProduct})
})

//to actually edit the data in db
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let{name,price,img, desc} = req.body;
    await Product.findByIdAndUpdate(id , {name,price,img, desc});
    res.redirect(`/products/${id}`);
})

//to delete a product
router.delete('/products/:id' , async(req, res) => {
    let {id} = req.params;
    const product = Product.findById(id);

    // for(let id of product.reviews){
    //     await Review.findByIdAndDelete(id);
    // }

    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

module.exports = router;