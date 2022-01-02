const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    
  id: {
    type :String
  },
  
  
     name: {
        type: String,
       // required: true,
        
      },
      email: {
        type: String,
       // required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
      },
      password: {
        type: String,
       // required: true,
        
       
      },
      
    });
    

module.exports = user=mongoose.model('user',userSchema)