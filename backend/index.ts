import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db'

//configs
dotenv.config();
const app = express();

//Middlewares
app.use(cors());



//Server
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("server start in Port:", PORT)
})