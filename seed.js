const mongoose = require('mongoose');

const Product = require('./models/Product');



const products = [
    {
        name:"Iphone 14pro",
        img:"https://images.unsplash.com/photo-1688780074342-7dddd9b5f582?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTRwcm98ZW58MHx8MHx8fDA%3D",
        price: 130000,
        desc:"very costly, aukaat ke bahar"
    },
    {
        name:"Ipad pro",
        img:"https://images.unsplash.com/photo-1590252973599-bb37fb327a55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwYWR8ZW58MHx8MHx8fDA%3D",
        price:150000,
        desc:"best for students"   
    },
    {
        name:"Samsung Galaxy",
        img:"https://images.unsplash.com/photo-1675452937281-24485562bd84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbXN1bmclMjBnYWxheHl8ZW58MHx8MHx8fDA%3D",
        price:100000,
        desc:"high end product",
    },
    {
        name:"OnePlus 9 Pro",
        img:"https://images.unsplash.com/photo-1637088587775-d8ca5fb1bc38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lcGx1cyUyMDl8ZW58MHx8MHx8fDA%3D",
        price:80000,
        desc:"one plus product",
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;
