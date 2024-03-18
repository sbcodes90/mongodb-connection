const express = require('express')
const cors = require('cors')//allows you to access our server from different domains
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')
require('dotenv').config()
const cookieParser = require('cookie-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', router)

mongoose.connect(process.env.DB_URL)
.then(() => console.log('DB connected!'))

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})