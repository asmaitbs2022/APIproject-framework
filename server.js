const express = require('express')
const mongoose = require('mongoose')

const app=express()

app.use(express.json())
const itemsuser =require('./routes/API/itemsuser')
app.use('/api/itemsuser',itemsuser)
const itemsbrands =require('./routes/API/itemsbrands')
app.use('/api/itemsbrands',itemsbrands)
const itemsrental =require('./routes/API/itemsrental')
app.use('/api/itemsrental',itemsrental)
const itemscar =require('./routes/API/itemscar')
app.use('/api/itemscar',itemscar)

const db=require('./configuration/Keys').mongoURI

mongoose.connect(db)
.then(()=>console.log('MongoDB well connected'))
.catch(err=>console.log('Mongoo DB not connected' +err))
const port = process.env.PORT || 5000
app.listen(port, ()=>console.log(`Server is running on port ${port}...`))
