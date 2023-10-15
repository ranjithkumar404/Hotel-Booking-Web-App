const router=require('express').Router()
const {createHotel,updateHotel,getAllHotel,getHotel,dltHotel}=require('../Controllers/hotel')
const { verifyAdmin } = require('../utils/verifyToken')

router.post('/',verifyAdmin, createHotel)
router.put('/:id',verifyAdmin,updateHotel)
router.delete('/:id',verifyAdmin,dltHotel)
router.get('/:id',getHotel)
router.get('/',getAllHotel)

module.exports=router