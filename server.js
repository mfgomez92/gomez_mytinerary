const express = require('express')
const cors = require('cors')
const router= require('./routes/index')
require('./config/database')

const app = express()
app.use(cors())

app.use('/', router)


app.listen(4000, () => console.log("app on listening on port 400"))

