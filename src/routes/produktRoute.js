import express from 'express';
import Product from '../models/products.js';
const router = express.Router();

router.get("/produkty/:kategoriaP/:vyrobca/:produkt", async(req, res) => {
    const kategoriaP = req.params.produkt;
    const produktP = req.params.produkt;

    try {
     const produktRender = await Product.findOne({name: produktP});
     res.render("produkty_views/produkt", { produkt: produktRender });


    } catch (error) {
        console.log(error);
    }

  
})


export {router};