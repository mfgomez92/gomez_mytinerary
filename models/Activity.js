const mongoose = require('mongoose')

const activitySchema= new mongoose.Schema({
    idCity:{type:mongoose.Schema.ObjectId, ref: 'city'},
    activityAuthorName:{type:String, required:true },
    activityAuthorPic:{type:String, required:true},
    activityContact:{type:String},
    activityName:{type:String, required:true},
    activityPic:{type:String, required:true},
    activityDuration:{type:Number, required:true},
    activityPrice:{type:Number, required:true},
    activityDescription:{type:String, required:true},
    activityCategory:{type:String, enum:["Nature and Wildlife", "Hiking", "Extreme Sports", "Safaris", "Beaches", "Ecological Tours", "Museums", "Monuments", "Adventures", "Bike Tours", "Night", "Foods", "Diving", "Trekking", "Educational", "Rafting", "Historical","Tourist Bus","Boat Tour","Private Tour", "Fishing", "Hunting", "Open Air"]},
})

const Activity = mongoose.model('activity', activitySchema)

module.exports= Activity