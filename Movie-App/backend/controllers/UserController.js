import user from "../models/User.js";

import bcryptjs from 'bcryptjs';

import asyncHandler from "../middlewares/asyncHandler.js";

import GenerateToken from '../utils/CreateToken.js'


const CreateUser = asyncHandler(async(req,res)=>{
   const {username,email,password} = req.body

   console.log(username)
   console.log(email)
   console.log(password)

})

export {CreateUser}
