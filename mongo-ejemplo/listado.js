// conexión
const mongoose = require("./conexion");

// modelo
const ModelMovie = mongoose.model("movies", {
    title: String,
    director: String,
    genre: String,
    year: String
});

// hacer la búsqueda - es asincronico
ModelMovie.find()
    .then(function (resultado) {
        console.log(resultado);
    });