const Sequelize = require('sequelize');


const sequelize = new Sequelize('todo', 'root', 'anakbebek', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
  });

module.exports = sequelize;
