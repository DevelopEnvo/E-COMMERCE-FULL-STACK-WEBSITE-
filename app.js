const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');




mongoose.connect('mongodb://127.0.0.1:27017/Shopping-rajnish-app')
.then(()=>{console.log("MongoDB Connected Successfully")})
.catch((err)=>{
    console.log("DB error")
    console.log(err)
})




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));//views folder
app.use(express.static(path.join(__dirname, 'public')));//public folder



app.listen(8080, ()=>{
    console.log("Server connected at Port 8080");
})