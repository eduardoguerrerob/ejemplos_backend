// server - librerias
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = 3000;

// lista de usuarios:
/*  [
        {
            "id":1, 
            "usuario":"abc"
            productos: [
                {
                    "id": 1,
                    "usuario": "abc",
                    "producto": "reloj",
                    "precio": 123,
                    "cantVendidas": 300
                },
                ....
            ]
        },
*/

let usuarios = [];

//const productos = [];

// modlewares
app.use(express.json());
app.use(cors());

/////////////////////////////////////////////////
// GET - lista de usuarios
/////////////////////////////////////////////////
app.get("/usuarios", (req, res) => {
    const usrLS = localStorage.getItem("usuarios");
    userAll = JSON.parse(usrLS);
    res.status(200).json(userAll);
})


/////////////////////////////////////////////////
// GET - status de los productos de un usuario
/////////////////////////////////////////////////
app.get("/usuarios/:id/productos", (req, res) => {
    const usrId = req.params.id;
    // traer los productos de ese usuario
    const prodLS = localStorage.getItem("productos");
    const prodAll = JSON.parse(prodLS);
    // seleccionar solo los productos del usuario
    const productosUser = [];
    prodAll.forEach(p => {       // averiguar el filter (que devuelve un array)
        if (p.id === usrId) {
            productosUser.push(p);
        }
    });
    res.json(productosUser);
})

/////////////////////////////////////////////////
// GET - consulta de productos de otros usuarios
/////////////////////////////////////////////////
app.get("/usuarios/:id/otrosprod", (req, res) => {
    const usrId = req.params.id;
    // traer los productos que no sean de ese usuario
    const prodLS = localStorage.getItem("productos");
    const prodAll = JSON.parse(prodLS);
    // seleccionar solo los productos del usuario
    const otrosprod = [];
    prodAll.forEach(p => {
        if (p.id !== usrId) {
            otrosprod.push(p);
        }
    });
    res.json(otrosprod);
})


/////////////////////////////////////////
// ruta GET genérica
/////////////////////////////////////////
app.get("*", (req, res) => {
    res.send("No se encuentra la ruta");
})

/////////////////////////////////////////
// ruta POST - registro de usuario
/////////////////////////////////////////
app.post("/usuarios/registro", (req, res) => {
    usr = req.body;

    // averiguar si ya está creado el usuario previamente
    const usrFound = usuarios.find(u => u.usuario === usr.usuario);
    if (usrFound) {
        return res.send(`Usuario ${usr} ya existe`);
    }
    // asignar id
    usr.id = usuarios.length + 1;
    // adicionar el usuario
    usuarios.push(usr);
    // grabar en el localStorage
    const usuarioStr = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuarioStr);
    res.status(200).end();
})

////////////////////////////////////////
// ruta POST - crear producto
////////////////////////////////////////
app.post("/productos", (req, res) => {
    prod = req.body();

    // validar que el usuario exista
    const usrFound = usuarios.find(u => u.usuario === prod.usuario);
    if (!usrFound) {
        return res.send(`Usuario no existe`);
    }

    // validar que el usuario no tenga ese producto
    const prodFound = productos.find(p => p.usuario == prod.usuario && p.producto === prod.producto);
    if (prodFound) {
        return res.send(`Producto ${prod.producto} ya existe para usuario ${prod.usuario}`);
    }
    // agregar producto
    prod.idProducto = productos.length + 1;
    productos.push(prod);
    // grabar en el localStorage
    const prodStr = JSON.stringify(productos);
    localStorage.setItem("productos", prodStr);
    res.status(200).end();
})

/////////////////////////////////////////////////////////
// POST - comprar un producto de otro usuario
/////////////////////////////////////////////////////////
app.post("/usuarios/:idUser/productos/:idProd/compra", (req, res) => {
    const idUser = req.params.idUser;
    const idProd = req.params.idProd;

    // traer los productos que no sean de ese usuario
    const prodLS = localStorage.getItem("productos");
    const prodAll = JSON.parse(prodLS);

    prodAll.forEach(p => {


    });
});


////////////////////////////////////////
// ruta POST genérica
////////////////////////////////////////
app.post("*", (req, res) => {
    product = req.body;

})

// server
app.listen(port, () => {
    console.log("Server esta escuchando en el puerto 3000");
})

