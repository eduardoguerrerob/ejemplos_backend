const mongoose = require("./conexion");

const menuModel = mongoose.model("menu", {
    plato: String,
    precio: String,
    tipoPlato: String
});

const nuevoPlato = new menuModel({
    plato: "Ajiaco",
    precio: "10500",
    tipoPlato: "típico"
});

nuevoPlato.save();
