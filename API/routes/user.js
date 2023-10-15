const router=require('express').Router()
const {updateUser,getAllUser,getUser,dltUser}=require('../Controllers/user')
const {verifyToken,verifyUser} = require('../utils/verifyToken')

router.get('/check',verifyToken,(req,res,next)=>{
    res.send("Hola user")
})
router.put('/:id',updateUser)
router.delete('/:id',dltUser)
router.get('/:id',getUser)
router.get('/',getAllUser)

module.exports=router