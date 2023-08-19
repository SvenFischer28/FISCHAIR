import express from "express";
import Product from "../models/products.js";
import Rekuperacia from "../models/recuperationModel.js";
const router = express.Router();

router.get("/produkty/:produkty/:vyrobca", async (req, res) => {
  const produktyParam = req.params.produkty;
  const vyrobca = req.params.vyrobca;

  const findAndRenderRekuperacie = async () => {
    const rekuperacie = await Rekuperacia.find({ brand: vyrobca });
    res.render("produkty_views/produkty", { produkty: rekuperacie });
  };

  try {
    if (produktyParam === "rekuperacie") {
      findAndRenderRekuperacie();
    } else {
      const renderProductsVyrobca = await Product.find({
        brand: vyrobca,
        productCategory: produktyParam,
      });
      res.render("produkty_views/produkty", {
        produkty: renderProductsVyrobca,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export { router };
