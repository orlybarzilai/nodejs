const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const products=[];

app.use(bodyParser.urlencoded({extended:false}));

exports.SaveProduct=(req,res,next)=>{
    //save data to database
    products.push(req.body.name);
    res.redirect('/');
}

exports.getProducts=(req,res,next)=>{
    res.render('products',{products:products});
}
exports.addProduct=(req,res,next)=>{
    res.render('add-product');
}
exports.homePage=(req,res,next)=>{
    res.render('index');
}
exports.showError=(req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page Not Found'});
}
