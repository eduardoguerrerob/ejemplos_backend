const { Sequelize } = require("sequelize");
const path = "mariadb://root@localhost:3306/bandas";

const sequelize = new Sequelize(path);

async function conectar() {

    try {
        await sequelize.authenticate();
        console.log("Conexión OK");
    } catch (error) {
        console.log(error);
    }
}

// conectar();    solo para probar la conexión

module.exports = sequelize;