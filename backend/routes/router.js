const express = require('express')
const router = express.Router()
const userModel = require('../models/schemas')
const bcrypt = require('bcrypt');

router.post('/users', async (req, res) => {
    const {username, password, email} = req.body
    //userModel references to the exported model

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const userData = {username: username, password:hashedPassword, email:email}

    // save data 
    const saveData = await userModel.insertMany(userData);

    console.log(saveData)
    setTimeout(() => {
      res.send(saveData)
    }, 5000)
 
    

})

router.post('/login', async (req, res) => {

try {
    // check if the user exists
    const user = await userModel.findOne({ username: req.body.username });
    if (user) {
      //check if password matches
      const result = await bcrypt.compare(req.body.password, user.password);
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