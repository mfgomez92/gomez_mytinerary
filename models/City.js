const mongoose = require('mongoose')

const citySchema= new mongoose.Schema({
    cityName:{type:String, required:true},
    direccion:{type:Object, required:true}
})

const City = mongoose.model('city', citySchema)