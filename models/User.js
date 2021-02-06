const { string } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, requerid:true},
    lastName: {type: String, requerid:true},
    username: {type: String, required:true},
    profilePicture:{type:String, required:true},
    password: {type: String, required:true},
    rol: {type: String, requerid:true, default:"personal account"},
    country:{type:String, required:true}
   //ver mailbox, activities, itineraries
})

const User = mongoose.model('user', userSchema)

module.exports = User