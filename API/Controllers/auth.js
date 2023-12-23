const user=require('../models/user')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
require('dotenv').config()
const createUser=async(req,res,next)=>{
  try {
    const salt = bcrypt.genSaltSync(10);//measure of how many times the password will be hashed.
const hash = bcrypt.hashSync(req.body.password, salt);//to protect the password stored in DB
    await user.create({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })
  res.status(200).send("User has been created")
  } catch (error) {
    next(error)
  }

}

const login=async(req,res,next)=>{
    try{
      console.log(req.body);
     const userdetail=await  user.findOne({username:req.body.name})
     if(!userdetail) return res.status(404).json("User not found!!!")
     const isPassword =await bcrypt.compareSync(req.body.password,userdetail.password)//have to check with the hashed password in the DB
    if(!isPassword) return res.status(400).json("Wrong password!!!")
    // const {password,isAdmin,...other}=userdetail;(we don't want to show the password and isAdmin) we can't use this one bec it show's more unwanted details so to specifc have to use _doc (the place where userdetails is placed)
    const token=jwt.sign({id:userdetail._id,isAdmin:userdetail.isAdmin},process.env.JWT)//passing the info with our own token
    const {password,isAdmin,...other}=userdetail._doc;
    res.cookie("access_token",token,{httpOnly:true,}).status(200).json({...other})//acces_token is the name of our token
    }catch(error){
        next(error)
    }
}




module.exports={createUser,login}