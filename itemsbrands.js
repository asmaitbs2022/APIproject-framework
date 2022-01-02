//items controller
const express = require('express')
const router =express.Router()

//import schema


const brands = require('../../models/brands')
router.get('/',(req,res)=>{
    
    //Schema.find()
    brands
        .find()
        
        .then(itemsbrands =>res.json(itemsbrands))
        .catch(err=>res.json({success : false, msg : err}))
        
   
})

router.get('/:type',()=>{
   type = req.params.type
    //call to schema for searching item using name
})
router.post('/',(req,res)=>{
   const newbrands = new brands({
type :req.body.type,
   

})
newbrands
     .save()
     .then(brands=>res.json({success : true,brands}))
     .catch(err=>res.json({success : false, msg : err}))
})
router.delete('/:type',(req,res)=>{
    console.log(req.params.type)
    res.send('ok'+req.params.type)
})
module.exports=router;