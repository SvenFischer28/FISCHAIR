import mongoose from "mongoose";

const recuperationSchema = new mongoose.Schema({
    brand: String,
    meno: String,
    link: String,
    image: String,
    price: Number,
    vykon: String,
    typVymenika: String,
    ucinnost: String,
    ventilatory: String,
    prikon: String,
    byPass: String,
    rozmery: String,
    text:[[String]]
})

const Rekuperacia = new mongoose.model("Recuperation", recuperationSchema)
export default Rekuperacia;