const sequelize = require("./conexion");
sequelize.authenticate()
    .then(() => {
        console.log("Conexión OK");
    }).catch(err => {
        console.log("Conexión ERROR");
    })