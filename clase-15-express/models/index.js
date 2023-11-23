const mongoose = require("mongoose");

const Propiedad = new mongoose.Schema({
  direccion: {
    calle: { type: String, required: true },
    barrio: { type: String, required: true },
    numero: { type: Number, required: true },
  },
  operacion: {
    type: String,
    enum: ["alquiler", "venta"],
  },
  tipo: {
    type: String,
    required: [true, "el tipo de propiedad es un campo obligatorio"],
    lowercase: true,
    trim: true,
    enum: {
      values: ["departamento", "casa", "ph"],
      message: "Tipo de propiedad ingresado incorrecto",
    },
  },
  fechaVenta: { type: Date },
  antiguedad: {
    type: Number,
    min: [0, "no puede ser negativo"],
    max: [20, "no tomamos casas con mas de 20 años"],
  },
  precio: { type: Number },
  visitantes: [{ apellido: { type: String }, fecha: { type: Date } }],
});

module.exports = mongoose.model("Propiedad", Propiedad);

