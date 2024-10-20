import express, { NextFunction, Request, Response } from 'express';
import userModel from '../models/userModel';
import bcrypt from 'bcryptjs';

export const userSignUpController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, name } = req.body;
        console.log(req.body)
        if (!email) {
            return res.status(400).json({ message: "Por favor ingresa el Correo", error: true });
        }
        if (!password) {
            return res.status(400).json({ message: "Por favor ingresa la Contraseña", error: true });
        }
        if (!name) {
            return res.status(400).json({ message: "Por favor ingresa tu Nombre", error: true });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const payload = {
            email,
            password: hashPassword,
            name,
        };

        const userData = new userModel(payload);
        const savedUser = await userData.save();  

        return res.status(201).json({  
            data: savedUser,
            success: true,
            error: false,
            message: "Usuario Creado Correctamente"
        });

    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({
                message: err.message || 'Error en el servidor',
                error: true,
                success: false,
            });
        } else {
            return res.status(500).json({
                message: 'Error desconocido',
                error: true,
                success: false,
            });
        }
        
    }
}
