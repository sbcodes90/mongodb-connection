const express = require('express')
const router = express.Router()
const userModel = require('../models/schemas')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

  const { username, password } = req.body;

  //look for username in database

  let user = await userModel.findOne({ username: username });

  //if username not found return 400 error with message 
  if (!user) {
    return res.status(400).json({
      errors: [
        {msg: "Invalid username"}
      ]
    })
  }

  //check is passwords match
  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    return res.status(401).json({
      errors: [
        {
          msg: 'password invalid'
        }
      ]
    })
  }

  //send jwt token
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
   res.header('auth-token', token).send(token)


// try {
//     // check if the user exists
//     const user = await userModel.findOne({ username: req.body.username });
//     if (user) {
//       //check if password matches
//       const result = await bcrypt.compare(req.body.password, user.password);
      
//       //Create and assign web token
//       const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
//       res.header('auth-token', token).send(token)

//       if (result) {
      
//         setTimeout(() => {
//         res.send("successfully logged in");
//         }, 5000)
//       } else {
//         res.status(400).json({ error: "password doesn't match" });
//       }
//     } else {
//       res.status(400).json({ error: "User doesn't exist" });
//     }
//   } catch (error) {
    res.status
})


///show all my database users
router.get('/users', async (req, res) => {
    const userData = await userModel.find()
    res.send(userData)
})
module.exports = router