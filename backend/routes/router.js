const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/users', async(req, res) => {
    const {username, password, email} = req.body
    const userData = {username: username, password:password, email:email}
    const newUser = new schemas.Users(userData)
    const saveNewUser = await newUser.save()
    saveNewUser()
    res.end()
})



router.get('/users', (req, res) => {
    const userData = [
        {
            "id": 1,
            "username": "kyote",
            "email": "kyote143@gmail.com"
        },
        {
            "id": 2,
            "username": "mingLee",
            "email": "minglee@gmail.com"
        }
    ]
    res.send(userData)
})
module.exports = router