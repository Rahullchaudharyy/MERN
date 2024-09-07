import express from 'express'

const router = express.Router()

// Controllers

import { createGenre } from '../controllers/genreControllers.js'
// middlewares 

import { authenticate,authorizeAdmin } from '../middlewares/authMiddleware.js'

router.route('/').post(authenticate,authorizeAdmin,createGenre)



export default router;