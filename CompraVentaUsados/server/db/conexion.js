const { Sequelize } = require("sequelize");
const path = "mariadb://root@localhost:3306/compraventa";
const sequelize = new Sequelize(path);

module.exports = sequelize;