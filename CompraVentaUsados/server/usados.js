// server - librerias
const express = require("express");
const cors = require("cors");
const app = express();

// midlewares
app.use(express.json());
app.use(cors())

const port = 3000;

// esquema de la lista de usuarios:
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
    ]
*/

let usuarios = [];

let productos = [];



/////////////////////////////////////////////////
// GET - lista de usuarios
/////////////////////////////////////////////////
app.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios);
})


/////////////////////////////////////////////////
// GET - productos de un usuario
/////////////////////////////////////////////////
app.get("/usuarios/:id/productos", (req, res) => {
    const usrId = req.params.id;
    // seleccionar solo los productos del usuario
    const productosUser = productos.filter(p => p.idUsuario === usrId);
    console.log("usrId:", parseInt(usrId));
    console.log(productosUser);

    res.json(productosUser);
})

/////////////////////////////////////////////////
// GET - consulta de productos de otros usuarios
/////////////////////////////////////////////////
app.get("/usuarios/:id/otrosprod", (req, res) => {
    const usrId = req.params.id;
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
    newUsr = req.body.usuario;
    // averiguar si ya está creado el usuario previamente
    const usrFound = usuarios.find(u => u.usuario === newUsr);
    if (usrFound) {
        return res.send(`Usuario ${newUsr} ya existe`);
    }
    // asignar id
    let usr = {};
    usr.id = usuarios.length + 1;
    usr.usuario = newUsr;

    // adicionar el usuario
    usuarios.push(usr);
    console.log("usuario en registro:", usuarios);
    res.status(200).end();
})

////////////////////////////////////////
// ruta POST - crear producto
////////////////////////////////////////
app.post("/productos", (req, res) => {
    const usuario = req.body.usuario;
    const producto = req.body.producto;
    const precio = req.body.precio;

    console.log(usuario);
    console.log(producto);
    console.log(precio);

    // validar que el usuario exista
    /*
    const usrFound = usuarios.find(u => u.usuario === usuario);
    if (!usrFound) {
        console.log(`Usuario no existe`);
        return res.send(`Usuario no existe`);
    }
    */

    // validar que el usuario no tenga ese producto
    /*
    const prodFound = productos.find(p => p.usuario == usuario && p.producto === producto);
    if (prodFound) {
        console.log(`Producto ${prod.producto} ya existe para usuario ${prod.usuario}`);
        return res.send(`Producto ${prod.producto} ya existe para usuario ${prod.usuario}`);
    }
    */
    // agregar producto
    let prod = {};
    prod.idProducto = productos.length + 1;
    prod.idUsuario = usuario;
    prod.producto = producto;
    prod.precio = precio;

    productos.push(prod);

    console.log("productos", productos);
    res.status(201).end();
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

