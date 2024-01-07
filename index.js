import express  from "express";
import cors from "cors";
import roomrouter from './Routers/bookingARoom.router.js';
const app = express()
const PORT = 5000;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcome to Hall Booking App 🎉")
})
app.use('/api/rooms',roomrouter)
app.listen(PORT,()=>{
    console.log("my App is listen port",PORT);
})