window.addEventListener("load", async () => {
    const usuarios = await listarUsuarios();
    const $listaUsuarios = document.getElementById("listaUsuarios");
    usuarios.forEach(function (usr) {
        const $opUsr = document.createElement("option");
        $opUsr.setAttribute("value", usr.id);
        $opUsr.textContent = usr.usuario;
        $listaUsuarios.appendChild($opUsr);
    });
})


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

    console.log("opciones=", opciones)

    let respuesta = await fetch(ruta, opciones);
    console.log(respuesta);
}

async function listarUsuarios() {
    let ruta = "http://localhost:3000/usuarios";
    let respuesta = await fetch(ruta);
    const usuarios = await respuesta.json();
    console.log(usuarios);
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
    console.log(respuesta);
}

async function listadoProdUsr() {
    const idUsuario = document.getElementById("idusuario").value;
    console.log(idUsuario);
    let ruta = `http://localhost:3000/usuarios/${idUsuario}/productos`;

}