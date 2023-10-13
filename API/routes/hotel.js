const router=require('express').Router()
const  hotel=require('../models/hotel')
router.post('/',async(req,res)=>{
    const Hotel=new hotel(req.body)
    try {
        const savedhotel= await Hotel.save()
        res.status(200).json(savedhotel)
    } catch (error) {
        console.log(error);
    }
})

module.exports=router