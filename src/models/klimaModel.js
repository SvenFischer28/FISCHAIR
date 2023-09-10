import mongoose from "mongoose";

const klimaSchema = new mongoose.Schema({
  brand: String,
  name: String,
  link: String,
  cardText: String,
  image: String,
  price: Number,
  chladiaciVykon: String,
  energetickaTriedaChladenia: String,
  SEER: String,
  vykurovaciVykon: String,
  energetickaTriedaKurenia: String,
  rozmeryVnutornejJednotky: String,
  rozmeryVonkajsejJednotky: String,
  text: [[String]],
});

const Klima = mongoose.model("Klima", klimaSchema);
export default Klima;
