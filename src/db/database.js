const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://islermagno:magn01sler@clustertest.0nyc0.mongodb.net/'

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connectione error: '))

db.once('open', () => {
    console.log("Connectes to Mongo")
})

module.exports = mongoose