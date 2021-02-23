
const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.json());

const PORT = 3000;

const limiter = rateLimit(
    {
        windowMs: 1 * 60 * 60 * 1000, // 1 hora
        max: 5 // limit each IP to 5 requests per windowMs
    });

// midleware
app.use(limiter);

const validarEmail = function (req, res, next) {
    const email = req.body.email;

    if (email.indexOf("@") === -1) {
        return res.status(422).send("el email no es valido");
    }

    next();
}


// ruta
app.get("/libros", (req, res) => {
    res.send("Cien años de soledad");
})

// ruta para registro
app.post("/registro", validarEmail, (req, res) => {
    // validar email



    res.send("registro ok")
})

// ruta para registro
app.post("/login", (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;

    res.json({ usuario, password });

})


// listen
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})
