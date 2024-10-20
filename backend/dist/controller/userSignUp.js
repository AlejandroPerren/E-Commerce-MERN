"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function userSignUpController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password, name } = req.body;
            if (!email) {
                return res.status(400).json({ message: "Por favor ingresa el Correo", error: true });
            }
            if (!password) {
                return res.status(400).json({ message: "Por favor ingresa la Contraseña", error: true });
            }
            if (!name) {
                return res.status(400).json({ message: "Por favor ingresa tu Nombre", error: true });
            }
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hashPassword = yield bcryptjs_1.default.hash(password, salt);
            if (!hashPassword) {
                throw new Error("algo Salio mal");
            }
            const payload = Object.assign(Object.assign({}, req.body), { password: hashPassword });
            const userData = new userModel_1.default(payload);
            const saveUser = userData.save();
            res.status(201).json({
                data: saveUser,
                success: true,
                error: false,
                message: "Usuario Creado Correctamente"
            });
            return res.status(201).json({
                message: 'Usuario registrado exitosamente',
                error: false,
                success: true,
            });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).json({
                    message: err.message || 'Error en el servidor',
                    error: true,
                    success: false,
                });
            }
            else {
                res.status(500).json({
                    message: 'Error desconocido',
                    error: true,
                    success: false,
                });
            }
        }
    });
}
exports.default = userSignUpController;
