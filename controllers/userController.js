const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path= require('path')


const userController = {
    signUp: async (req, res) => {
        var errores = []
        const {name, lastName, username,  password, country} = req.body
        const userExists = await User.findOne({username: username})
        if (userExists) {
            errores.push('The username is already in use. Choose another.')
        }
        if(req.files ===null ){
            return res.status(400).json({response: "error"})
        }
        const file= req.files.file
        if (errores.length === 0) {
            const passwordHasheado = bcryptjs.hashSync(password, 10)
            const profilePictureUbicacion= `../frontend/src/assets/profilePictures/${file.name}`
            var newUser = new User({
                name, lastName, username, profilePicture:profilePictureUbicacion,  password: passwordHasheado, country
            })
            var newUserSaved = await newUser.save()
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY, {})
        }

        
        file.mv(path.join(__dirname, '../frontend/src/assets/profilePictures/'+ file.name), error=>{
            if(error){
                return res.json({response:error})
            }
            return res.json({success: errores.length === 0 ? true : false, 
                errores: errores,
                response: {token, name: newUserSaved.name, profilePicture: newUserSaved.profilePicture }})
        } )

        
        
    },
    signGoogle: async(req, res)=>{
        console.log(req.body)
        const {givenName, familyName, email,  googleId, imageUrl} = req.body
        const userExists = await User.findOne({username: email})
        if (userExists) {
            var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
        }else{
            var newUser = new User({
                name:givenName, lastName:familyName, username:email, profilePicture:imageUrl, googleId
            })
            var newUserSaved = await newUser.save()
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY, {})
        }
        return res.json({success: true, response: {token, name: userExists.name,profilePicture: userExists.profilePicture}})

    },
    signIn: async (req, res) => {
        const {username, password} = req.body
        const userExists = await User.findOne({username: username})
        if (!userExists) {
            return res.json({success: false, mensaje: 'Incorrect username and / or password.'})
        }
        const passwordMatches = bcryptjs.compareSync(password, userExists.password)
        if (!passwordMatches) {
            return res.json({success: false, mensaje: 'Incorrect username and / or password.'})
        }
        var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
        return res.json({success: true, response: {token, name: userExists.name,profilePicture: userExists.profilePicture}})
    },

    logFromLS: (req, res) => {
        res.json({success: true, response: {token: req.body.token, name: req.user.name, profilePicture: req.user.profilePicture}})
    }
}

module.exports = userController