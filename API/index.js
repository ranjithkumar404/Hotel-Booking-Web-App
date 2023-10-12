const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
require('dotenv').config()


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