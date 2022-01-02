//items controller
const express = require('express')
const router =express.Router()

//import schema


const car = require('../../models/car')
router.get('/',(req,res)=>{
    
    //Schema.find()
    car
        .find()
        
        .then(itemscar =>res.json(itemscar))
        .catch(err=>res.json({success : false, msg : err}))
        
   
})

router.get('/:id',()=>{
    id = req.params.id
    //call to schema for searching item using user
})
router.post('/',(req,res)=>{
   const newcar = new car({
id :req.body.id,
name:req.body.name,
  

})
newcar
     .save()
     .then(car=>res.json({success : true,car}))
     .catch(err=>res.json({success : false, msg : err}))
})
router.delete('/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('ok'+req.params.id)
})
module.exports=router;