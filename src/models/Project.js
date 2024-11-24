const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const database = require('../db/database');

const Projects = sequelize.define(
    'projects',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            AutoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        priority: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Projects