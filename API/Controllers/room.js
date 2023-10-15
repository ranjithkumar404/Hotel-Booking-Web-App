const room=require('../models/room')
const hotel=require('../models/room')

const createRoom=async(req,res,next)=>{
    
   
    try {
        const Room=await room.create(req.body)
         await hotel.findByIdAndUpdate(req.params.hotelId,{
            $push:{rooms: Room._id}
        })
        res.status(200).json(Room)
    } catch (error) {
        next(error)
    }
}

const updateRoom=async(req,res,next)=>{
    try {
        //$set is to update the DB after finding the hotel and new is to return the updated one ,otherwise it will return the old one
        const updatedhotel=await hotel.findByIdAndUpdate((req.params.id),{$set:req.body},{new:true})
        res.status(200).json(updatedhotel)
    } catch (error) {
        next(error)
    }
}

const dltRoom=async(req,res,next)=>{
    try {
       await room.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Succefully!!")
    } catch (error) {
       next(error);
    }
}
const getRoom=async(req,res,next)=>{
    try {
      const getRoom= await room.findById(req.params.id)
       res.status(200).json(getRoom)
    } catch (error) {
        next(error)
    }
}

const getAllRoom=async(req,res,next)=>{
    try {
        const getRoom= await room.find()
       res.status(200).json(getRoom)
    } catch (error) {
        next(error)
    }
}
module.exports={createRoom,updateRoom,dltRoom,getAllRoom,getRoom}