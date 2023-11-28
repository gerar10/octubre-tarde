const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Al tener información sensible y no queremos que la vean, utilizamos las variables de entorno
const dotenv = require("dotenv");
dotenv.config();
// Guaramos en constantes las variables de entorno para despues poder utilizarlas
const PORT = 3000;
const password = 'valinhos2023';
const dbUser = 'gerarburgos1987';

const url = `mongodb+srv://${dbUser}:${password}@cluster0.kttc6we.mongodb.net/?retryWrites=true&w=majority`;

// Requerimos las rutas de la carpeta routes
const routes = require("./routes/index");

app.use(express.json());
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "public")));
// La linea comentaba de arriba se reemplaza por esta de abajo segun la expliación de pledu 
app.use(express.static(path.join(__dirname, "public")));

// esta linea la pide render para chequear la app 
// app.use("/health", (req, res) => res.sendStatus(200));

// Linea de codigo que nos lleva a las rutas
app.use("/", routes);

// Nos conectamos a las base de datos mongoDB y levantamos el servidor
const connectMongo = async () => {
  try {
    await mongoose.connect(url);
    app.listen(PORT, () => {
      console.log(
        `Servidor escuchando en el puerto ${PORT} y la base de datos conectada`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// ejecutamos la función
connectMongo();
