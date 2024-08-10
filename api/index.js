import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

// Middleware to parse JSON requests
app.use(express.json());

// Use router for user-related routes
app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);


// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
    res.send('Hello World');
});








app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Interval Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});