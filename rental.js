const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const rentalSchema = new Schema({
  user: {
   
    id: {
      type :String
    },
    
    //required: true
  },
  car: {
   
      name: {
        type: String,
        //required: true,
        minlength: 1,
        maxlength: 50
      },
      
    //required: true
  },
  dateOut: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateReturned: {
    type: Date
  },
 
})

module.exports = rental=mongoose.model('rental',rentalSchema)