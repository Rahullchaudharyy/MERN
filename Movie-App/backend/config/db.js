import mongoose from 'mongoose';
import dotenv from 'dotenv'




dotenv.config()


const conectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/movies_app')
        console.log('Database Conected Sucessfully')

    } catch (error) {
        console.log(`error:${error.message}`)
        process.exit(1)
    }
}

export default conectDB;

//