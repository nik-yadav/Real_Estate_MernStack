import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userroute.js'
import authrouter from "./routes/authroute.js"
dotenv.config();

const link = process.env.MONGO;
const port = process.env.PORT;
const app = express();

app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/auth", authrouter);

app.listen(port, () => {
    console.log(`Server is running on port`, port);
})

const mongoCo = async() =>{
    try{
        await mongoose.connect(link);
        console.log(`Connected to database`);
    }catch(e){
        console.log(`Database Connection has error`, e);
    }
}
mongoCo();
