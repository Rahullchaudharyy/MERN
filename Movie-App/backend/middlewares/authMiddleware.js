import jwt from 'jsonwebtoken'
import user from '../models/User.js'
import asyncHandler from './asyncHandler.js'
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file




const authenticated = asyncHandler(async (req, res, next) => {

    let token;


    // reat the jwt from the 'jwt'  cookie

    token.req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECTRET);
            req.user = await user.findById(decoded.userId).select('-password')
            next()


        } catch (error) {
            res.status(401)
            throw new Error('Not Authorized,token failed')

        }
    } else {

        res.status(401)

        throw new Error('Not Authorized or Failed To login')
    }
})


// Cheak User is Admin or not . 
const Authorized = (req,res,next) =>{

    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).send('Not Authorized as an Admin')

    }

}


export {authenticated,Authorized}