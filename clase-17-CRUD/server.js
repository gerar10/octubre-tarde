const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const app = express();
const url =
  "mongodb+srv://gerarburgos1987:valinhos2023@cluster0.kttc6we.mongodb.net/?retryWrites=true&w=majority";

const Producto = require("./models/index");

app.use(express.json());

app.use("/", routes);

const connectToMongo = async () => {
  try {
    await mongoose.connect(url);
    app.listen(3000, () => {
      console.log(
        "Servidor levantado en el puerto 3000 y Base de datos conectada"
      );
    });
  } catch (error) {
    console.log(error);
  }
};

connectToMongo();


