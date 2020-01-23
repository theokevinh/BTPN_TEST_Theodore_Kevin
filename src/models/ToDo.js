const Sequelize = require('sequelize');
const db = require('../database/Database');

const ToDo = db.define('todoapps',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true

    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.STRING
    },
    deadline: {
        type: Sequelize.DATE
    },
    createdAt: {
        type: Sequelize.DATE,
        timestamps: true,
        allowNull: true,
        field: 'created_at'
    },
    updatedAt:{
        type: Sequelize.DATE,
        timestamps: true,
        allowNull: true,
        field: 'updated_at'
    }
},{
    timestamps: true,
    freezeTableName: true
});

module.exports =ToDo;