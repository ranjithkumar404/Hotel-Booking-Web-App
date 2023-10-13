const router=require('express').Router()
const  hotel=require('../models/hotel')
const {createHotel,updateHotel,getAllHotel,getHotel,dltHotel}=require('../Controllers/hotel')

router.post('/',createHotel)
router.put('/:id',updateHotel)
router.delete('/:id',dltHotel)
router.get('/:id',getHotel)
router.get('/',getAllHotel)

module.exports=router