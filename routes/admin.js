const express= require('express')
const router=express.Router()
const path = require("path");
const rootDir=require('../util/path')


const product=[]
//add product rout
// router.get("/add-product", (req, res) => {
//     // console.log(`Request received`);
//     res.sendFile(path.join(rootDir, "views", "add-product.html"));
//   });
router.get("/add-product", (req, res) => {
    // console.log(`Request received`);
    res.render('add-product',{productTitle:'Add Product'})
  });
  router.post("/add-product", (req, res) => {
    console.log(req.body);
    product.push({title:req.body.title,price:req.body.price,description:req.body.description,imageUrl:req.body.imageUrl})
    res.redirect("/");
  });

  exports.routes=router
  exports.product=product