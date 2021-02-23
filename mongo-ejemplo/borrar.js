// conexión
const mongoose = require("./conexion");

// modelo
const ModelMovie = mongoose.model("movies", {
    title: String,
    director: String,
    genre: String,
    year: String
});

// borrar un registro por el id
ModelMovie.deleteOne({ _id: '6029d9664d7a3532fc7366a0' })
    .then(function (err, resp) {
        console.log(resp);
    });