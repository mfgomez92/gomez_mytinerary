const mongoose = require('mongoose')

let citySchema= new mongoose.Schema({
    cityCode:{type:String, required:true, unique:true},
    cityName:{type:String, required:true},
    countryName:{type:String, required:true},
    //imgCity tiene la url en onde se esta guardando la imagen
    imgCity:{type:String, required:true},
    titleSV:{type:String, required:true},
    streetView:{type:String, required:true},
    flag:{type:String, required:true}
})

let City = mongoose.model('city', citySchema)

module.exports= City