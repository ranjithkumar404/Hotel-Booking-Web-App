const  user=require('../models/user')

const updateUser=async(req,res,next)=>{
    try {
        
        const updatedUser=await user.findByIdAndUpdate((req.params.id),{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const dltUser=async(req,res,next)=>{
    try {
       await user.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Succefully!!")
    } catch (error) {
       next(error);
    }
}
const getUser=async(req,res,next)=>{
    try {
      const getUser= await user.findById(req.params.id)
       res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}

const getAllUser=async(req,res,next)=>{
    try {
        const gethotel= await user.find()
       res.status(200).json(gethotel)
    } catch (error) {
        next(error)
    }
}
module.exports={updateUser,getAllUser,getUser,dltUser}