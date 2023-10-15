const router=require('express').Router()
const {createUser,login}=require('../Controllers/auth')

router.post('/register',createUser)
router.post('/login',login)

module.exports=router