const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini instance 
const Review = require('../models/Review');

router.post('/products/:id/review', async(req,res)=>{
    let{id} = req.params;
    let{rating, comment} = req.body;
    const product = await Product.findById(id);
    const review = new Review({rating, comment});
    

    product.reviews.push(review);
    await review.save();
    await product.save();
    res.redirect(`/products/${id}`);
})



module.exports = router;