const express = require('express')
const cors = require('cors')
const router= require('./routes')
require('./config/database')

const app = express()
//Middlewares
app.use(cors())
//Me traduce las peticiones de json a objeto para poder cargarlos a la database
app.use(express.json())

app.use('/', router)


app.listen(4000, () => console.log("app on listening on port 4000"))

