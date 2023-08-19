import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import ejs from "ejs";
import _ from "lodash";
import nodemailer from "nodemailer";
import lodash from "lodash";
import mongoose from "mongoose";
import Product from "./src/models/products.js";
import { router as homeRoute } from "./src/routes/homeRoute.js";
import { router as produktyRoute } from "./src/routes/produktyRoute.js";
import { router as produktRoute } from "./src/routes/produktRoute.js";
import { router as rekuperaciaRoute } from "./src/routes/rekuperaciaRoute.js";
import Rekuperacia from "./src/models/recuperationModel.js";

const app = express();

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
import "dotenv/config";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_CONNECTION);
}

app.use("/", homeRoute);
app.use("/", produktyRoute);
app.use("/", produktRoute);
app.use("/", rekuperaciaRoute);

app.listen(PORT, function (req, res) {
  console.log("app is running on port 3000");
});

const produkt = new Product({
  productCategory: "rekuperacia",
  brand: "COMAIR",
  name: "HRUC-PLUS",
  link: "/rekuperacie/COMAIR/HRUC-PLUS",
  cardText:
    "Kompaktné rozmery, ovládanie cez smartfón, kvalitná konštrukcia ideálna pre byty a menšie rodinné domy.",
  image: "/imgs/Rekuperacie/COMAIR/hruc-plus.jpeg",
  price: 200,
  topDescription:
    "Najnovšia generácia rekuperačných jednotiek COMAIR zaručuje optimálnu rovnováhu medzi komfortom a energetickou účinnosťou. Zariadenia sú navrhnuté na nepretržitú, nepočuteľnú a energeticky efektívnu prevádzku. Moderné možnosti ovládania cez dotykový displej, alebo smart zariadenie. K dispozícií sú vo verzii HRUC-Plus 2 s výkonom 225 m3/h a HRUC-Plus 3  s výkonom 325 m3/h.",
  listDescription: [
    [
      "MODERNÉ OVLÁDANIE",
      "- ovládanie s dotykovou obrazovkou na jednotke",
      "- ovládanie s dotykovou obrazovkou v interiéri (nástenný dokovací kit)",
      "- ovládanie prostredníctvom Smart zariadenia cez aplikáciu",
    ],
    ["SENZORY", "- CO2", "- vlhkosť"],
    [
      "KOMPATIBILITA",
      "- 5 x bezpotenciálový kontakt",
      "- 1 x prepínač vstupu pre zvýšenie výkonu (napr. Spínač svetla)",
      "- 1 x výstup poruchy",
      "- možnosť 2 x vstup 0 – 10 V",
    ],
    [
      "MAXIMÁLNE POHODLIE",
      "- výmena filtrov bez snímania vonkajšieho krytu",
      "- tichá prevádzka",
      "- upozornenie na zanesenie filtrov a interval výmeny",
      "- pohodlná inštalácia pravej/ľavej verzie",
    ],
    [
      "EFEKTIVITA",
      "- energetická účinnosť A+",
      "- SEC A+",
      "- účinnosť rekuperácie 94 %",
    ],
  ],
});

const rek = new Rekuperacia({
  brand: "COMAIR",
  meno: "HRUC-PLUS",
  link: "/rekuperacie/COMAIR/HRUC-PLUS",
  image: "/imgs/Rekuperacie/COMAIR/hruc-plus.jpeg",
  price: 3567.34,
  vykon: 300,
  typVymenika: "Doskový protiprúdový",
  ucinnost: "95% (efektívna účinnosť PHI 91%)",
  ventilatory:
    "Nízkootáčkové EC s dozadu zahnutými lopatkami a vstavaným anemometrom (úspornejšie a tichšie)",
  prikon: "46,5W pri 279 m³/h (53 Pa)",
  byPass: "Automatický - 100% obtoková klapka",
  rozmery: "650 x 750 x 560",
  text: [
    [
      "MODERNÉ OVLÁDANIE",
      "- ovládanie s dotykovou obrazovkou na jednotke",
      "- ovládanie s dotykovou obrazovkou v interiéri (nástenný dokovací kit)",
      "- ovládanie prostredníctvom Smart zariadenia cez aplikáciu",
    ],
    ["SENZORY", "- CO2", "- vlhkosť"],
    [
      "KOMPATIBILITA",
      "- 5 x bezpotenciálový kontakt",
      "- 1 x prepínač vstupu pre zvýšenie výkonu (napr. Spínač svetla)",
      "- 1 x výstup poruchy",
      "- možnosť 2 x vstup 0 – 10 V",
    ],
    [
      "MAXIMÁLNE POHODLIE",
      "- výmena filtrov bez snímania vonkajšieho krytu",
      "- tichá prevádzka",
      "- upozornenie na zanesenie filtrov a interval výmeny",
      "- pohodlná inštalácia pravej/ľavej verzie",
    ],
    [
      "EFEKTIVITA",
      "- energetická účinnosť A+",
      "- SEC A+",
      "- účinnosť rekuperácie 94 %",
    ],
  ],
});
