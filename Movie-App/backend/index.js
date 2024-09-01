import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';


// Filesle

import connectDB from './config/db.js'

import UserRoutes from './routes/UserRoutes.js'

dotenv.config()

connectDB()

const app = express()


// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const PORT = process.env.PORT || 3000;

//routes 

app.use('/api/v1/users',UserRoutes)


app.listen(PORT, () => {

    console.log(`Server is Running on ${PORT}`)
})
