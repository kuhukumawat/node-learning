const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir=require('../util/path')
const adminData=require('./admin')


//will cause issue if we will take use here it will not go futher if in we will use shop routre firstr
// router.use("/", (req, res) => {
//     console.log(req.body);
//     res.send("<h1>Hello From Express</h1>");
//   });

//   module.exports=router
// router.get('/',(req, res) => {
//     console.log('shopjs',adminData.product);
//     res.sendFile(path.join(rootDir, "views", "shop.html"))
//   });
router.get('/',(req, res) => {
    const products=adminData.product
    console.log('shopjs',products);
    res.render('shop',{prod:products,docTitle:'Shop',path:'/shop',hasProduct:products.length>0})
  
  });
  module.exports=router