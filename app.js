import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import ejs from "ejs";
import _ from "lodash";
import nodemailer from "nodemailer";
import lodash from "lodash";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import Product from "./src/models/products.js";
import { router as homeRoute } from "./src/routes/homeRoute.js";
import { router as produktyRoute } from "./src/routes/produktyRoute.js";
import { router as produktRoute } from "./src/routes/produktRoute.js";
import { router as rekuperaciaRoute } from "./src/routes/rekuperaciaRoute.js";
import Rekuperacia from "./src/models/recuperationModel.js";

const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_CONNECTION);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

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

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
