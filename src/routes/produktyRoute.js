import express from 'express';
import Product from '../models/products.js';
const router = express.Router();


router.get("/:produkty/:vyrobca", async (req, res)=> {
    const produktyParam = req.params.produkty;
    const vyrobca = req.params.vyrobca;
    
    try {
        const renderProductsVyrobca =await Product.find({brand: vyrobca, productCategory: produktyParam})   
        res.render("produkty_views/produkty", { produkty: renderProductsVyrobca })
    } catch (error) {
        console.log(error);
    }
   


})


export {router};