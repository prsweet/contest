import express,{type Request,type Response} from 'express'
import bcrypt from 'bcrypt'
const router=express.Router()
import {prisma} from '@repo/db'

router.post('/signup',async(req:Request,res:Response)=>{
    try {
        const {name,email,password,role}=req.body;
        const isRegistered = await prisma.user.findFirst({
            where:{
                email
            }
        })
        if(isRegistered){
            res.status(409).json({
                success:false,
                error:"Email already exists"
            })
        }
        const hashedPassowrd=bcrypt.hashSync(password,process.env.SALT!);
      const user=await prisma.user.create({
        data:{
            name,
            email,
            password
        }
      })
        
        res.status(201).json({
            sucess:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            error:error
        })
    }
})