const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017[BE]_System_initialization', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('Successfully connect to MongoDB')
    } catch (error) {
        console.log('Connect failure')
    }
}

module.exports = {
    connect
}