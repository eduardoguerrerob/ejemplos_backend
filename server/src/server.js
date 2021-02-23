const express = require("express");
const app = express();
const PORT = 3000;

// también se puede con bodyParser, instarlo, hacer el require y usar bodyParser.json()
app.use(express.json());

const moviles = [
    {
        marca: "Motorola",
        modelo: "G8",
        pantalla: "5.1",
        sistema_operativo: "Android",
        precio: 200
    },
    {
        marca: "IPhone",
        modelo: "X",
        pantalla: "5.0",
        sistema_operativo: "iOS",
        precio: 500
    }
];

// rutas
app.get("/moviles", (req, res) => {
    res.json(moviles);
});

app.post("/moviles", (req, res) => {
    moviles.push(req.body);
    res.status(201).end();

});

app.post("*", (req, res) => {
    req.status(404).end();
})

app.get("*", (req, res) => {

    res.status(404).json(
        {
            error: true,
            msg: `no se encontró la ruta solicitda ${req.url}`
        }
    )
});

// listen
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}...`);
});

