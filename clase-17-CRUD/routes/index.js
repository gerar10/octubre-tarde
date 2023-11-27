const express = require("express");
const router = express.Router();
const Producto = require("../models/index");

// Ruta para crear un producto nuevo
router.post("/productos", async (req, res) => {
  try {
    await Producto.create(req.body);
    res.status(201).send("Producto creado correctamente");
  } catch (error) {
    res.status(500).send("No se pudo crear el producto enviado");
  }
});

// Ruta para listar los productos de nuestra base de datos
router.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    if (productos) {
      res.status(200).send(productos);
    } else {
      res.status(200).send("No hay productos en la base de datos");
    }
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

// Solicitar un producto en particular
router.get("/productos/:id", async (req, res) => {
  try {
    const producto = await Producto.find({ _id: req.params.id });
    if (producto.length) {
      res.status(200).send(producto);
    } else {
      res.status(404).send("El producto solicitado no esta con ese ID");
    }
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

// Ruta para borrar un producto
router.delete("/productos/:id", async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(204).send("Borrado");
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

// Editar un producto
router.put("/productos/:id", async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(producto);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

module.exports = router;
