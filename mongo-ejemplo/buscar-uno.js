const mongoose = require("./conexion");

// modelo
const ModelMovie = mongoose.model("movies", {
    title: String,
    director: String,
    genre: String,
    year: String
});

ModelMovie.findOne({ title: 'Shinning' })
    .then(function (resultado) {
        console.log(resultado)
    });