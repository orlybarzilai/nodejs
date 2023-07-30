const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const productController=require("../controllers/products.js");
const router=express.Router();
router.use(bodyParser.urlencoded({extended:false}));
const products=[];

/*router.get('/add-product', (req,res,next)=> {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))});*/
/*router.post('/product', (req,res,next)=> {
        console.log(req.body.name);
});*/
router.get('/add-product',productController.addProduct);
router.post('/product',productController.SaveProduct);
router.get('/products',productController.getProducts);

/*router.get('/', (req,res,next)=> 
{res.sendFile(path.join(__dirname,'../','views','index.ejs'))});*/
router.get('/',productController.homePage);
router.use(productController.showError);
module.exports=router;
