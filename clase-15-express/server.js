const express = require("express");
const app = express();
const routes = require("./routes/index");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://gerarburgos1987:valinhos2023@cluster0.kttc6we.mongodb.net/?retryWrites=true&w=majority";
const Propiedad = require("./models/index");

app.use(express.json());

app.use("/", routes);

const connectToMongo = async () => {
  try {
    await mongoose.connect(url);
    app.listen(3000, () => {
      console.log(
        "Servidor escuchando en el puerto 3000 y base de datos ya conectada"
      );
    });
  } catch (error) {
    console.log(error);
  }
};
connectToMongo();
