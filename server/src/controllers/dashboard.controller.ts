import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

export const dashboard = async(req:Request,res:Response)=>{
     

}

export const addTransaction = async(req:Request,res:Response)=>{
    try {
        const {title,amount,tranaction_type,category,user_id} = req.body;
        const trancation = await prisma.trancation.create({
            data:{
                amount:amount,
                title:title,
                category_id:category,
                userId:user_id,
                transaction_type:tranaction_type
            }
        })
        res.json(200).json({message:"Transaction added succesfully",data:trancation})

    } catch (error) {
         console.error("error",error);
        res.status(500).json({message:"Server Error"});
        
    }
    
     
    
}