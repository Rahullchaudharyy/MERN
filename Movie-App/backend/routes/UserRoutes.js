
import express, { Router } from 'express'

// Controllers 
import { CreateUser,LogInUser,LogOutCurrentUser } from '../controllers/UserController.js';

const router = express.Router();

router.route('/').post(CreateUser)
router.post('/auth',LogInUser)
router.post('/logout',LogOutCurrentUser)



export default router;



