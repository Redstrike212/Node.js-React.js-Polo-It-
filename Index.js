const server = require('./src/server');
const mongoose = require('./src/db/database')
const sequelize = require('./src/db/database')
require('dotenv').config()

async function main() {
    try {
        await sequelize.authenticate()
        console.log('Conexion con sequelize')
        await mongoose.connection
        console.log('Conexion con la Base de Datos')
        server.listen(PORT, console.log(`Server listened in port ${PORT}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
const PORT = process.env.PORT || 3000;

main()