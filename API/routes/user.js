const router=require('express').Router()
const {updateUser,getAllUser,getUser,dltUser}=require('../Controllers/user')
const {verifyToken,verifyUser,verifyAdmin} = require('../utils/verifyToken')

// router.get('/check',verifyToken,(req,res,next)=>{
//     res.send("Hola user")
// })
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("Hola user,you are logged in!!")
// })
// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("Hola Admin,you are logged in!!")
// })
router.put('/:id',verifyUser,updateUser)
router.delete('/:id',verifyUser,dltUser)
router.get('/:id',verifyUser,getUser)
router.get('/',verifyAdmin,getAllUser)

module.exports=router