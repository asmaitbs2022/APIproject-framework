const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const brandsSchema = new Schema({
  type: {
    type: String,
    //required: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  }
})

module.exports = brands=mongoose.model('brands',brandsSchema)