import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

export default connectDB;