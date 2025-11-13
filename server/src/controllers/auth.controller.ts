import { PrismaClient } from "../generated/prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const prisma = new PrismaClient();

export const register = async(req:Request,res:Response)=>{

    try {
        const {name,email,password} = req.body;
        
        const userExist = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(userExist){
            return res.status(401).json({message:'User Already Exists,Plese Login In'})
        }
        const hashedpassword = await bcrypt.hash(password,10)
        const user = await prisma.user.create({
            data:{name,email,password:hashedpassword}
        })
        res.status(200).json({message:"User Added succesfully",user});

    } catch (error) {
        console.error("error",error);
        res.status(500).json({message:"Server Error"});
    }
}

export const login = async(req:Request,res:Response)=>{

    try {
        const {email,password} =req.body;
        const userExsist = await prisma.user.findUnique({where:{email}})
        if(!userExsist){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const checkpassword = await bcrypt.compare(password, userExsist.password);
        if(!checkpassword){
             return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {id:userExsist.id,email:userExsist.email},
            process.env.JWT_SECRET as string,
            {expiresIn:'1d'}
        )
        res.status(200).json({
        message: "Login successful",
        token,
        user: { id: userExsist.id, name: userExsist.name, email: userExsist.email },
        });

    } catch (error) {
         console.error("error",error);
        res.status(500).json({message:"Server Error"});
    }
}

