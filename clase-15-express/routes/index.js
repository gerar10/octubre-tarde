const express = require("express");
const router = express.Router();

router.get("/saludo", (req, res) => {
  res
    .status(200)
    .send(
      "Hola como estas? llegaste a la primer ruta, ahora vamos a crear mas rutas, y vamos a ver todos los metodos y practicar"
    );
});

router.get("/bye", (req, res) => {
  res.status(200).send("Fue un gusto, nos vemos en la proxima");
});

router.get("/prueba", (req, res) => {
  res.status(200).send({
    nombre: "julian",
    apeliido: "Sosa",
    provincia: "Cordoba",
    edad: 25,
  });
});

router.post("/libro", (req, res)=> {
    console.log("BODY", req.body);
    res.status(200).send(`El libro que me enviastes es ${req.body.libro} y el auto es ${req.body.autor} y la editorial es ${req.body.editorial}`)
})

const propiedades = [
    {
        id: 1,
        calle: "Rivadavia",
        tipo: "ph",
        habitaciones: 4
    },
    {
        id: 2,
        calle: "Belgrano",
        tipo: "departamento",
        habitaciones: 2
    },
    {
        id: 3,
        calle: "Uruguay",
        tipo: "casa",
        habitaciones: 6
    },
    {
        id: 4,
        calle: "Colombia",
        tipo: "Depto",
        habitaciones: 3
    },
]

router.post("/propiedades/:id", (req, res) => {
    const propiedad = propiedades.find((propiedad) => propiedad.id === Number(req.params.id))
    if (propiedad) {
        res.status(200).send(propiedad)
    } else {
        res.status(404).send({mensaje: "La propiedad solicitada no esta en nuestra base"})
    }
})


module.exports = router;
