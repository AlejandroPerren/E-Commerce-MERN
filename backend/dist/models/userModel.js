"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    perfilePic: String
}, {
    timestamps: true
});
const userModel = mongoose_1.default.model("user", userSchema);
exports.default = userModel;
