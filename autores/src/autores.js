const express = require("express");
const app = express();
const PORT = 3000;

///////////////////////////////////////////////////////////
const autores = [
    {
        id: 1,
        nombre: "Jorge Luis",
        apellido: "Borges",
        fechaDeNacimiento: "24/08/1899",
        libros: [
            {
                id: 1,
                titulo: "Ficciones",
                descripcion: "cuentos varios",
                anhoPublicacion: 1944
            },
            {
                id: 2,
                titulo: "El Aleph",
                descripcion: "mas cuentos",
                anhoPublicacion: 1949
            }

        ]
    },
    {
        id: 2,
        nombre: "Gabriel",
        apellido: "Garcia Marquez",
        fechaDeNacimiento: "6/03/1927",
        libros: [
            {
                id: 1,
                titulo: "Cien años de soledad",
                descripcion: "novela sobre Macondo",
                anhoPublicacion: 1967
            },
            {
                id: 2,
                titulo: "Crónica de una muerte anunciada",
                descripcion: "novela corta sobre prejuicios",
                anhoPublicacion: 1981
            },
            {
                id: 3,
                titulo: "El coronel no tiene quien le escriba",
                descripcion: "novela sobre la espera",
                anhoPublicacion: 1961
            }

        ]
    }
]
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// midleware para obtener el json del body
///////////////////////////////////////////////////////////
app.use(express.json());

//////////////////////////////////////////////////////////
// midlewares
//////////////////////////////////////////////////////////
const logReq = function (req, res, next) {
    console.log(req.method, req.url);
    next();
}
app.use(logReq);

const verificarIdAutor = function (req, res, next) {
    const id = req.params.id;
    console.log("id:", id);
    const autor = autores.find(a => a.id === parseInt(id));
    if (!autor) {
        return res.status(404).end();
    }
    req.autor = autor;
    next();   //pregunta: puedo enviar el id al next?
}



//////////////////////////////////////////////////////////
// rutas
//////////////////////////////////////////////////////////
// GET autores
app.get('/autores', (req, res) => {
    res.json(autores);
});

// GET de un autor
app.get("/autores/:id", verificarIdAutor, (req, res) => {
    //   const id = req.params.id;
    //   const autor = autores.find(a => a.id === parseInt(id));
    res.json(req.autor);
})

// GET genreal
app.get("*", (req, res) => {
    res.status(404).end();
})

// POST de un nuevo autor
app.post("/autores", (req, res) => {
    const autor = req.body;  //pregunta: body o body()
    autores.push(autor);
    res.status(201).end();
})

app.delete("/autores/:id", verificarIdAutor, (req, res) => {
    const id = req.params.id;
    const autor = autores.find(a => a.id === parseInt(id));
    const index = autores.indexOf(autor);
    autores.splice(index, 1);

    res.status(200).end();
})


/////////////////////////////////////////////////////////
// listen
/////////////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})