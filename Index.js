const server = require('./src/server');
const sequelize = require('./src/db/database');
require("./src/models/categoria")
require('dotenv').config()

async function main() {
    try {
        await sequelize.sync()
        console.log('Conexion con la Base de Datos')
        server.listen(PORT, console.log(`Server listened in port ${PORT}`))
    } catch (error) {
        console.error('No pudo conectar con la Base de Datos:', error);
    }
}
const PORT = process.env.PORT || 3000;

main()