import { type Response,type Request } from "express"
import {prisma} from "@repo/db"
export const createBatch=async(req:Request,res:Response)=>{
    try {
        const {name}=req.body;
        const batchExists=await prisma.batch.findFirst({
            where:{
                name
            }
        })
        if(batchExists){
            res.status(409).json({
                success:false,
                error:'Batch Name already exists'
            })
            return;
        }
        const batch=await prisma.batch.create({
            data:{
                name
            }
        })
        res.status(200).json({
            success:true,
            data:batch,
            message:'Batch created successfully'
        })
        return
    } catch (error) {
        console.log('error in creating batch', error)
        res.status(500).json({
            success: false,
            error
        })
        return;
    }
}
export const updateBatch=async(req:Request,res:Response)=>{
    try {
        const batchId=req.params.id;
        const {name}=req.body
        console.log('batchid while updating',batchId)
        let batchExists=await prisma.batch.findFirst({
            where:{
                id:batchId
            }
        })
        if(!batchExists){
            res.status(404).json({
                success:false,
                error:'No batch found to update'
            })
        }
        const batch=await prisma.batch.update({
            where:{
                id:batchId
            },data:{
                name
            }
        })
        res.status(200).json({
            success:true,
            data:batch,
            message:'Batch updated successfully'
        })
        return
        
        
    } catch (error) {
        console.log('error in creating batch', error)
        res.status(500).json({
            success: false,
            error
        })
        return;
    }
}
export const deleteBatch=async(req:Request,res:Response)=>{
    try {
        const batchId=req.params.id;
        console.log('batchId while deleting ',batchId)
        await prisma.batch.delete({
            where:{
                id:batchId
            }
        })
        res.status(204).json({
            success:true,
            data:{},
            message:'Batch deleted successfully'
        })
    } catch (error) {
        console.log('error in creating batch', error)
        res.status(500).json({
            success: false,
            error
        })
        return;
    }
}
export const getBatches=async(req:Request,res:Response)=>{
    try {
        let batches=await prisma.batch.findMany({})
        res.status(200).json({
            success:true,
            data:batches,
            message:'batches fetched successfully'
        })
    } catch (error) {
        console.log('error in creating batch', error)
        res.status(500).json({
            success: false,
            error
        })
        return;
    }
}