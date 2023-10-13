const  hotel=require('../models/hotel')
const createHotel=async(req,res)=>{
    const Hotel=new hotel(req.body)
    try {
        const savedhotel= await Hotel.save()
        res.status(200).json(savedhotel)
    } catch (error) {
        console.log(error);
    }
}

const updateHotel=async(req,res)=>{
    try {
        //$set is to update the DB after finding the hotel and new is to return the updated one ,otherwise it will return the old one
        const updatedhotel=await hotel.findByIdAndUpdate((req.params.id),{$set:req.body},{new:true})
        res.status(200).json(updatedhotel)
    } catch (error) {
        console.log(error);
    }
}

const dltHotel=async(req,res)=>{
    try {
       await hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Succefully!!")
    } catch (error) {
        console.log(error);
    }
}
const getHotel=async(req,res)=>{
    try {
      const gethotel= await hotel.findById(req.params.id)
       res.status(200).json(gethotel)
    } catch (error) {
        console.log(error);
    }
}

const getAllHotel=async(req,res)=>{
    try {
        const gethotel= await hotel.find()
       res.status(200).json(gethotel)
    } catch (error) {
        console.log(error);
    }
}
module.exports={createHotel,updateHotel,getAllHotel,getHotel,dltHotel}