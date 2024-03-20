const express = require('express')
const router = express.Router()
const userModel = require('../models/schemas')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

//delete user by id

router.delete("/userlist/:id", (req, res) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then((response) => {
      if (!response) {
        return res.status(404).send();
      }

      res.send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.post('/createUser', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Check if fields are empty 
    if(!username && !password && !email) {
      return res.status(400).send('empty fields')
    }
    //Check username
    if( username.length < 4){
      return res.status(401).json({ error: 'Username is required'})
    }
    //Check password
    if( password.length < 6) {
      return res.status(402).json({ error: 'Password is required and must be at least 6 characters long'})
    }
    //Check email format
   const isEmailValid = validator.isEmail(email);

   if (!isEmailValid) {
    return res.status(403).json({ error: 'Please enter a valid email' })
   }

   //Check if user already exists
   const emailExist = await userModel.findOne({email});

   if(emailExist) {
    return res.status(404).json({
      error: 'User already exists'
    })
   }

   //Encrypt and hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt)

   //Create user
   const user = await userModel.create({
    username, email, password: hashedPassword
   })

   return res.json(user)

  } catch (error) {
    console.log(error)
  }
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
  const token = jwt.sign({_id: user._id, username: user.username}, process.env.TOKEN_SECRET, {}, (err, token) => {
    if(err) throw err; 
    res.cookie('auth-token', token).send(token)

  });

    res.status
})


///show all my database users
router.get('/userlist', async (req, res) => {
    const userData = await userModel.find()
    console.log(userData)
    res.send(userData)
})





module.exports = router