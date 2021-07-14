import mongoose from 'mongoose'

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://phong:123@cluster0.fxtkg.mongodb.net/[BE]_System_initialization?retryWrites=true&w=majority', {
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

export default {
    connect
}