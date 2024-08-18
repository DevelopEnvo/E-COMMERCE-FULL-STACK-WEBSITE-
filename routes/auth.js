const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router(); //mini instance 

//to show the form of signup
router.get('/register', (req,res)=>{
    res.render('auth/signup');
})

//actually want to register a user in my db
router.post('/register', async(req, res) => {
    let{email, password, username} = req.body;
    const user = new User({email, username})
    const newUser = await User.register(user, password);
    res.send(newUser);
})

//to get login form
router.get('/login', (req, res)=>{
    res.render('auth/login');
})
//to actually login via the db
router.post('/login', 
    passport.authenticate('local', 
        {
            failureRedirect: '/login', failureMessage: true 
        }),
        (req, res)=>{
            req.flash('success', 'Logged in successfully');
            res.redirect('/products');
});

module.exports = router;