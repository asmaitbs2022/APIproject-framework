//items controller
const express = require('express')
const router =express.Router()

//import schema


const rental = require('../../models/rental')
router.get('/',(req,res)=>{
    
    //Schema.find()
    rental
        .find()
        
        .then(itemsrental =>res.json(itemsrental))
        .catch(err=>res.json({success : false, msg : err}))
        
   
})

router.get('/:user',()=>{
    user = req.params.user
    //call to schema for searching item using user
})
router.post('/',(req,res)=>{
   const newrental = new rental({
user :req.body.user,
car:req.body.car,
dateOut:req.body.dateOut,
dateReturned:req.body.dateReturned
   

})
newrental
     .save()
     .then(rental=>res.json({success : true,rental}))
     .catch(err=>res.json({success : false, msg : err}))
})
router.delete('/:user',(req,res)=>{
    console.log(req.params.user)
    res.send('ok'+req.params.user)
})
module.exports=router;