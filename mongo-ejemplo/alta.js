// conexión
const mongoose = require("./conexion");

// modelo
const ModelMovie = mongoose.model("movies", {
    title: String,
    director: String,
    genre: String,
    year: String
});

const aMovie = {
    title: "Shinning",
    director: "Alan Parker",
    genre: "Musical",
    year: "1990"
}

// crear el documento de mongo
const dMovie = new ModelMovie(aMovie);

// grabar el documento
dMovie.save();