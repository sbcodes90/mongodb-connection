const express = require('express')
const router = express.Router()
const userModel = require('../models/schemas')

router.post('/users', async (req, res) => {
    const {username, password, email} = req.body
    const userData = {username: username, password:password, email:email}
    //userModel references to the exported model
    const saveData = await userModel.insertMany(userData);
    console.log(saveData)
    res.send(saveData)
    

})


///show all my database users
router.get('/users', async (req, res) => {
    const userData = await userModel.find()
    res.send(userData)
})
module.exports = router