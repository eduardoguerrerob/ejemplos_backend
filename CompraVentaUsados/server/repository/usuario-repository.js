const sequelize = require("../db/conexion");

/**
 * 
 * @param {Object} usuario 
 */
async function insertUsuario(usuario) {
    try {
        const result = await sequelize.query("INSERT INTO `usuarios` (`usuario`, `email`, `password`) VALUES (?, ?, ?)",
            {
                replacements: [usuario.usuario, usuario.email, usuario.password],
                type: sequelize.QueryTypes.INSERT
            })
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getUsuarios() {
    try {
        const usuarios = await sequelize.query("SELECT * from usuarios",
            {
                type: sequelize.QueryTypes.SELECT
            })
        console.log("get usuarios:", usuarios);
        return usuarios;
    } catch (error) {
        console.log(error);
    }
}


module.exports = { insertUsuario, getUsuarios };