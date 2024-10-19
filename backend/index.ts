import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db'
import router from './routes/index'
//configs
dotenv.config();
const app = express();

//Middlewares
app.use(cors());


app.use("/api", router)

//Server
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("server start in Port:", PORT)
})