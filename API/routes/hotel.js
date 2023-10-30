const router=require('express').Router()
const {createHotel,updateHotel,getAllHotel,getHotel,dltHotel,countByCity,countByTypes}=require('../Controllers/hotel')
const { verifyAdmin } = require('../utils/verifyToken')

router.post('/',verifyAdmin, createHotel)
router.put('/:id',verifyAdmin,updateHotel)
router.delete('/:id',verifyAdmin,dltHotel)
router.get('/find/:id',getHotel)
router.get('/',getAllHotel)
router.get('/countbyc',countByCity)
router.get('/countByType',countByTypes)
// router.get('/countbyt',countByType)

module.exports=router