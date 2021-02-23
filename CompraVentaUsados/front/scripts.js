
async function crearUsuario() {
    let ruta = "http://localhost:3000/usuarios"
    let valorUsuario = document.getElementById("usuario").value;
    let body = {
        usuario: valorUsuario
    }


    let opciones = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
            usuario: JSON.stringify(body)
        }
    }

    let respuesta = await fetch(ruta, opciones);
    console.log(respuesta);
}

async function listarUsuarios() {
    let ruta = "http://localhost:3000/usuarios";
    let respuesta = await fetch(ruta);
    const usuarios = respuesta.json();
    console.log(usuarios);
}

/*
async function crearProducto() {

}
*/