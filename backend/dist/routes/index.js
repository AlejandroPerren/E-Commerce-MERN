"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userSignUp_1 = __importDefault(require("../controller/userSignUp"));
const router = express_1.default.Router();
router.post('/signup', userSignUp_1.default);
exports.default = router;
