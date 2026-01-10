import express, { Router } from 'express'
import { loginUser, signupUser } from '../controllers/AuthController.js'
export const router:Router=express.Router()

router.post('/signup',signupUser)
router.post('/login',loginUser)