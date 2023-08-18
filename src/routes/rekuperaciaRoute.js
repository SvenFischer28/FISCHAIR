import express from 'express';
import mongoose from 'mongoose';
import Rekuperacia from '../models/recuperationModel.js';

const router = express.Router();

router.get("/rekuperacie/:id", async (req, res) => {
   const reqId = req.params.id;
   
    try {
        const rekuperacia = await Rekuperacia.findById(reqId);
        res.render("produkty_views/rekuperacia", { rekuperacia })
    
    } catch (error) {
        console.log(error);
    }
})

export { router };