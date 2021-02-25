window.addEventListener("load", llenarSelectUsr());


async function crearUsuario() {
    let ruta = "http://localhost:3000/usuarios/registro"
    let valorUsuario = document.getElementById("usuario").value;
    let data = {
        usuario: valorUsuario
    }

    let opciones = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    let respuesta = await fetch(ruta, opciones);
    llenarSelectUsr();
}

async function listarUsuarios() {
    let ruta = "http://localhost:3000/usuarios";
    let respuesta = await fetch(ruta);
    const usuarios = await respuesta.json();

    $tableUsr = document.getElementById("tableUsr");
    $tableUsr.innerHTML = "<th>ID</th><th>Usuario</th>"
    usuarios.forEach(function (u) {
        const $item = document.createElement("tr");

        const $colId = document.createElement("td");
        $colId.textContent = u.id;
        $item.appendChild($colId);

        const $colUsuario = document.createElement("td");
        $colUsuario.textContent = u.usuario;
        $item.appendChild($colUsuario);

        $tableUsr.appendChild($item);
    })



    return usuarios;
}


async function crearProducto() {
    let ruta = "http://localhost:3000/productos";
    let usuario = document.getElementById("listaUsuarios").value;
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;

    let data = {
        usuario: usuario,
        producto: producto,
        precio, precio
    }

    let opciones = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    let respuesta = await fetch(ruta, opciones);
}

async function listadoProdUsr() {
    const idUsuario = document.getElementById("idusuario").value;
    let ruta = `http://localhost:3000/usuarios/${idUsuario}/productos`;
    let respuesta = await fetch(ruta);
    let prodUsr = await respuesta.json();
    console.log("prodUsr:", prodUsr);

    const $tableProd = document.getElementById("tableProd");
    $tableProd.innerHTML = "<th>ID</th><th>Articulo</th><th>Precio</th><th>Cant. Vendidas</th>";
    prodUsr.forEach(function (p) {
        const $item = document.createElement("tr");
        const $colId = document.createElement("td");
        $colId.textContent = p.idUsuario;
        $item.appendChild($colId);

        const $colProducto = document.createElement("td");
        $colProducto.textContent = p.producto;
        $item.appendChild($colProducto);

        const $colPrecio = document.createElement("td");
        $colPrecio.textContent = p.precio;
        $item.appendChild($colPrecio);

        $tableProd.appendChild($item);
    });
}

async function llenarSelectUsr() {
    const usuarios = await listarUsuarios();
    const $listaUsuarios = document.getElementById("listaUsuarios");
    $listaUsuarios.innerHTML = '';
    usuarios.forEach(function (usr) {
        const $opUsr = document.createElement("option");
        $opUsr.setAttribute("value", usr.id);
        $opUsr.textContent = usr.usuario;
        $listaUsuarios.appendChild($opUsr);
    });
}