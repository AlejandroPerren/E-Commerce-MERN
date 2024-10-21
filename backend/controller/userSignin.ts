import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from 'bcryptjs';

async function userSignInController(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Por favor ingresa el Correo", error: true });
        }
        if (!password) {
            return res.status(400).json({ message: "Por favor ingresa la Contraseña", error: true });
        }


        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Credenciales incorrectas", error: true });
        }

    
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(401).json({ message: "Credenciales incorrectas", error: true });
        }

      
        return res.status(200).json({
            message: "Inicio de sesión exitoso",
            user: { id: user._id, email: user.email },
        
            success: true,
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

export default userSignInController;
