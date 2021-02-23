const sequelize = require("../conexion");


async function getBandas() {
    const result = await sequelize.query("SELECT * FROM bandas", { tpye: sequelize.QueryTypes.SELECT });
    return result[0];
}

async function getBandasBy() {
    const result = await sequelize.query("SELECT * FROM bandas", { tpye: sequelize.QueryTypes.SELECT });
    return result[0];
}

module.exports = { getBandas, getBandasBy };