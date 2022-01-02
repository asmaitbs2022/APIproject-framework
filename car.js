const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const carSchema = new Schema({
    
  id: {
    type :String
  },
  
  
  name: {
        type: String,
       // required: true,
        
      },
     
       
     
      
    });
    

module.exports = car=mongoose.model('car',carSchema)