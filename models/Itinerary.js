const mongoose = require('mongoose')

const itinerarySchema= new mongoose.Schema({
    itineraryCreator:{type:Number, required:true},
    itineraryName:{type:String, required:true},
    itineraryDuration:{type:Number, required:true},
    itineraryPrice:{type:Number, required:true},
    itineraryLike:{type:Number, required:false},
    itineraryActivity:{type:Array, required:true },
    itineraryHashtag:{type:Array, required:true }



})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports= Itinerary