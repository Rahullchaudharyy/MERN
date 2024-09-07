import mongoose from 'mongoose'


const GenreSchema = new mongoose.Schema({

     name:{
        type:String,
        unique:true,
        required:true, 
        maxLength:45,
        trim:true, 

     }



},{timestamps:true})


export const Genre = mongoose.model("Genre",GenreSchema)