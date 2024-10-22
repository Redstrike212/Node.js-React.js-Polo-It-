const server = require('./src/server');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Server listened in port ${PORT}`));
