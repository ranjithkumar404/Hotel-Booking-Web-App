const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
const cors=require('cors')
require('dotenv').config()
const hotelrouter=require('./routes/hotel')
const error=require('./utils/error')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/user')
const roomRoute=require('./routes/room')
const cookieparser=require("cookie-parser")
app.use(cors())
app.use(express.json())
app.use(cookieparser())
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use('/hotel',hotelrouter)
app.use('/auth',authRoute)
app.use('/user',userRoute)
app.use('/room',roomRoute)
const connect=async()=>{
try {
    await mongoose.connect(process.env.URL)
    console.log("Connected to DB");
} catch (error) {
    console.log(error);
}
}
app.listen(3001,()=>{
    connect()
    console.log("Server is listening!!!")
})