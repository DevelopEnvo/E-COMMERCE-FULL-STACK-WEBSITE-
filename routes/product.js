const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini instance 
const {validateProduct, isLoggedIn,isSeller} = require('../middleware');

//to show all the products
router.get('/products', isLoggedIn, async(req,res) =>{
    try {
        let products = await Product.find({})//.find() is a mongoose method and we are using this because we want to take the data from database and want to render on the index page
    res.render('products/index', {products});
        
    } catch (e) {
        res.status(500).render('error', {err: e.message})
    }
    
})


//to show the form for new product
router.get('/product/new', isLoggedIn, (req,res)=>{
    try{
        res.render('products/new');
    }catch (e) {
        res.status(500).render('error', {err: e.message})
    }
})

//to actually add the product
router.post('/products' ,validateProduct ,isLoggedIn, isSeller,async(req, res) =>{
    try{
        let{name, price, img, desc} = req.body;
        await Product.create({name, price, img, desc, author:req.user._id});
        req.flash('success' , 'Product added successfully');
        res.redirect('/products')
    }catch (e) {
        res.status(500).render('error', {err: e.message})
    }
})


//to show a particular product
router.get('/products/:id',isLoggedIn, async(req, res) =>{
    try{
        let{id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        res.render('products/show', {foundProduct , msg:req.flash('msg')});
    }catch (e) {
        res.status(500).render('error', {err: e.message})
    }
})

//form to edit the product
router.get('/products/:id/edit',isLoggedIn, async(req,res) =>{
    try{
        let{id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit', {foundProduct})
    }catch (e) {
        res.status(500).render('error', {err: e.message})
    }
        
})

//to actually edit the data in db
router.patch('/products/:id' ,isLoggedIn , validateProduct ,async(req,res)=>{
    try{
        let {id} = req.params;
        let{name,price,img, desc} = req.body;
        await Product.findByIdAndUpdate(id , {name,price,img, desc});
        req.flash('success' , 'Product edited successfully');
        res.redirect(`/products/${id}`);
    }catch (e) {
        res.status(500).render('error', {err: e.message})
    }
})

//to delete a product
router.delete('/products/:id' ,isLoggedIn,  async(req, res) => {
    try{
        let {id} = req.params;
        const product = Product.findById(id);
    
        // for(let id of product.reviews){
        //     await Review.findByIdAndDelete(id);
        // }
    
        await Product.findByIdAndDelete(id);
        req.flash('success' , 'Product deleted successfully');
        res.redirect('/products');
    }catch (e) {
        res.status(500).render('error', {err: e.message})
    }
})

module.exports = router;