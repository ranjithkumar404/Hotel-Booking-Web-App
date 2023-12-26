const  hotel=require('../models/hotel')
const createHotel=async(req,res,next)=>{
    const Hotel=new hotel(req.body)
    try {
        const savedhotel= await Hotel.save()
        res.status(200).json(savedhotel)
    } catch (error) {
        next(error)
    }
}

const updateHotel=async(req,res,next)=>{
    try {
        //$set is to update the DB after finding the hotel and new is to return the updated one ,otherwise it will return the old one
        const updatedhotel=await hotel.findByIdAndUpdate((req.params.id),{$set:req.body},{new:true})
        res.status(200).json(updatedhotel)
    } catch (error) {
        next(error)
    }
}

const dltHotel=async(req,res,next)=>{
    try {
       await hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Succefully!!")
    } catch (error) {
       next(error);
    }
}
const getHotel=async(req,res,next)=>{
    try {
      const gethotel= await hotel.findById(req.params.id)
       res.status(200).json(gethotel)
    } catch (error) {
        next(error)
    }
}

const getAllHotel=async(req,res,next)=>{
    const city=req.query.city
    try {
        const gethotel= await hotel.find({city:city})
       res.status(200).json(gethotel)
    } catch (error) {
        next(error)
    }
}

const countByCity=async (req,res,next)=>{
    try {
        const cities= req.query.cities.split(",")
        //Promise.all is used to handle array request 
        const list= await Promise.all(cities.map(city=>{
            // return hotel.find({city:city}).length() it takes more time than the next return statement
            return hotel.countDocuments({city:city})
        }))
      
        res.status(200).json(list)
    } catch (error) {
        
    }
}
const countByTypes=async (req,res,next)=>{
    try {
       const hotelcount= await hotel.countDocuments({type:"Hotel"})
       const apartmentcount= await hotel.countDocuments({type:"apartment"})
       const resortcount= await hotel.countDocuments({type:"resort"})
       const villacount= await hotel.countDocuments({type:"villa"})
       const cabincount= await hotel.countDocuments({type:"cabin"})
        res.status(200).json([
            {type:"Hotel",count:hotelcount},
            {type:"Apartment",count:apartmentcount},
            {type:"Resort",count:resortcount},
            {type:"Villa",count:villacount},
            {type:"Cabin",count:cabincount}
        ])
    } catch (error) {
        console.log(error);
        next(error)
    }
}
module.exports={createHotel,updateHotel,getAllHotel,getHotel,dltHotel,countByCity,countByTypes}