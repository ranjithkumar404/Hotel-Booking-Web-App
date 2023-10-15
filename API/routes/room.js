const router=require('express').Router()
const {createRoom,updateRoom,dltRoom,getAllRoom,getRoom}=require('../Controllers/room')
const { verifyAdmin } = require('../utils/verifyToken')

router.post('/:hotelId',verifyAdmin, createRoom)
router.put('/:id',verifyAdmin,updateRoom)
router.delete('/:id/:hotelId',verifyAdmin,dltRoom)
router.get('/:id',getRoom)
router.get('/',getAllRoom)

module.exports=router