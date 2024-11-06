const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://islermagno:Magn01sler@clustertest.0nyc0.mongodb.net/'

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error: '))

db.once('open', () => {
    console.log("Connectes to MongoDb")
});

module.exports = mongoose