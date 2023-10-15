const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
require('dotenv').config()
const hotelrouter=require('./routes/hotel')
const error=require('./utils/error')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/user')
const roomRoute=require('./routes/room')
const cookieparser=require("cookie-parser")
app.use(express.json())
app.use(cookieparser())
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
app.listen(3000,()=>{
    connect()
    console.log("Server is listening!!!");
})