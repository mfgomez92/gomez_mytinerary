const mongoose = require('mongoose')
 
const itinerarySchema= new mongoose.Schema({
    idCity:{type:mongoose.Schema.ObjectId, ref: 'city'},
    itineraryAuthorName:{type:String, required:true },
    itineraryAuthorPic:{type:String, required:true},
    itineraryAuthorContact:String,
    itineraryName:{type:String, required:true},
    itineraryDescription:String,
    itineraryPrice:{type:Number, min:1,max:5, required:true},
    itineraryDuration:{type:Number, required:true},
    itineraryCategory:{type:[String], enum:["Nature and Wildlife", "Hiking", "Extreme Sports", "Safaris", "Beaches", "Ecological Tours", "Museums", "Monuments", "Adventures", "Bike Tours", "Night", "Foods", "Diving", "Trekking", "Educational", "Rafting", "Historical","Tourist Bus","Boat Tour","Private Tour", "Fishing", "Hunting", "Open Air"]},
    itineraryActivity:[{
        activityId:{type:String, required:true},
        activityName: {type: String, required:true},
        activityPic:{type:String, required:true},
        activityDescription:{type:String, required:true}
    }],
    itineraryLike:{type:Number, default: 0},
    itineraryViews:{type:Number, default:0},
    itineraryCommentary:{
        commentaryAuthor:String,
        commentaryPic:String,
        commentaryDescription:String
    }
})


const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports= Itinerary