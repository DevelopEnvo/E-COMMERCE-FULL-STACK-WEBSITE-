const mongoose = require('mongoose');

const Product = require('./models/Product');



const products = [
    {
        name:"Iphone 14pro",
        img:"https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwaW1hZ2VzfGVufDB8fDB8fHww",
        price: 130000,
        desc:"very costly, aukaat ke bahar"
    },
    {
        name:"Ipad pro",
        img:"https://images.unsplash.com/photo-1564863770068-88ff823f08d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBhZCUyMHBybyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        price:150000,
        desc:"best for students"   
    },
    {
        name:"Samsung Galaxy",
        img:"https://images.unsplash.com/photo-1565967249821-083c4775e5bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbXN1bmclMjBnYWxheHl8ZW58MHx8MHx8fDA%3D",
        price:100000,
        desc:"high end product",
    },
    {
        name:"OnePlus 9 Pro",
        img:"https://images.unsplash.com/photo-1570944632944-50fa5f49e603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lcGx1cyUyMDd8ZW58MHx8MHx8fDA%3D",
        price:80000,
        desc:"one plus product",
    },
    {
        name:"Apple Air Pods",
        img:"https://images.unsplash.com/photo-1525825691042-e14d9042fc70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fHww",
        price:50000,
        desc:"bass boosted"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;
