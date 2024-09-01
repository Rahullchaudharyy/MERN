
import express, { Router } from 'express'

// Controllers 
import { CreateUser } from '../controllers/UserController.js';

const router = express.Router();

router.route('/').post(CreateUser)


export default router;

