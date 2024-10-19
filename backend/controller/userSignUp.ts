import express, { Request, Response } from 'express';
import userModel from '../models/userModel';

async function userSignUpController(req: Request, res: Response){
    try{
        const {email, password, name} = req.body

        if(!email){
            throw new Error("Por favor ingresa el Correo")
        }
        if(!password){
            throw new Error("Por favor ingresa la Contraseña")
        }
        if(!name){
            throw new Error("Por favor ingresa tu Nombre")
        }
        const userData = new userModel(req.body)

    }catch(err){
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}