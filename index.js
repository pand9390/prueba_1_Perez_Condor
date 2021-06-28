//crear servidor
const express = require('express');

const app = express()

const {RouterIndex}=require('./routes/index');

app.use("/prueba", RouterIndex)

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
})