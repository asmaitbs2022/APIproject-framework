//items controller
const express = require('express')
const router =express.Router()

//import schema
const user = require('../../models/user')
router.get('/',(req,res)=>{
    
    //Schema.find()
    user
        .find()
        
        .then(itemsuser =>res.json(itemsuser))
        .catch(err=>res.json({success : false, msg : err}))
        
   
})

router.get('/:id',()=>{
    id = req.params.id
    //call to schema for searching item using id 
})
router.post('/',(req,res)=>{
   const newuser = new user({
        id :req.body.id,
        name :req.body.name,
        email :req.body.email,
        password : req.body.password,

})
newuser
     .save()
     .then(user=>res.json({success : true,user}))
     .catch(err=>res.json({success : false, msg : err}))
})
router.delete('/:iduser',(req,res)=>{
    console.log(req.params.iduser)
    res.send('ok'+req.params.iduser)
})

module.exports=router;