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
    try{

        let{email, password, username} = req.body;
        const user = new User({email, username})
        const newUser = await User.register(user, password);
        // res.redirect('/login');
        req.login(newUser, function(err){
            if(err){
                return next(err);
            }
            req.flash('success','Successfully registered');
            return res.redirect('/products');
        })
        
    }
    catch (e) {
        req.flash('error', e.message);
        return res.redirect('/signup');
    }
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
            // console.log(req.user, 'raj');
            req.flash('success', 'Logged in successfully');
            res.redirect('/products');
});


//to logout
router.get('/logout', (req,res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success', 'Logged out successfully');
    res.redirect('/login');
})

module.exports = router;