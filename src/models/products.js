import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    productCategory: String,
    brand: String,
    name: String,
    link: String,
    cardText: String,
    image: String,
    price: Number,
    topDescription: String,
    listDescription: [[String]]
})




const Product  = mongoose.model("Product", productSchema);

export default Product;