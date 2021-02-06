const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    signUp: async (req, res) => {
        var errores = []
        const {name, lastName, username, profilePicture,  password,  rol, country} = req.body
        const userExists = await User.findOne({username: username})
        if (userExists) {
            errores.push('The username is already in use. Choose another.')
        }

        if (errores.length === 0) {
            const passwordHasheado = bcryptjs.hashSync(password, 10)

            var newUser = new User({
                name, lastName, username, profilePicture,  password: passwordHasheado,  rol, country
            })
            var newUserSaved = await newUser.save()
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY, {})
        }

        return res.json({success: errores.length === 0 ? true : false, 
                         errores: errores,
                         response: {token, name: newUserSaved.name, profilePicture: newUserSaved.profilePicture}})
        
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