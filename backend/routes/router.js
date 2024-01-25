const express = require('express')
const router = express.Router()

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