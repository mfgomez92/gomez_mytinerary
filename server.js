const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router= require('./routes')
const path= require('path')
const fileUpload = require('express-fileupload')



const app = express()
//Middlewares
//Me traduce las peticiones de json a objeto para poder cargarlos a la database

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(fileUpload())

//static files
app.use(express.static(path.join(__dirname,'frontend/public/assets')))

app.use('/', router)


app.listen(4000, () => console.log("app on listening on port 4000"))

