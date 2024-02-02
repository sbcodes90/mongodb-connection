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

router.post('/login', async (req, res) => {

try {
    // check if the user exists
    const user = await userModel.findOne({ username: req.body.username });
    if (user) {
      //check if password matches
      const result = req.body.password === user.password;
      if (result) {
        res.send("successfully logged in");
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status
}})

///show all my database users
router.get('/users', async (req, res) => {
    const userData = await userModel.find()
    res.send(userData)
})
module.exports = router