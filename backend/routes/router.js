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



/* router.post('/createUser', async (req, res) => {
    const {username, password, email} = req.body
    //userModel references to the exported model

    //check if user exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }

    if(username.length < 3) {
      return res.status(401).json({ error: 'Username must be at least 3 characters' })

    }

    if (password.length < 5) {
      return res.status(401).json({ error: 'Password must be at least 8 characters' })

    }

   //check email format
   const isEmailValid = validator.isEmail(email);

   if (!isEmailValid) {
    return res.status(401).json({ error: 'Please enter a valid email' })
   }

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
 
    

}) */

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
router.get('/userlist', async (req, res) => {
    const userData = await userModel.find()
    console.log(userData)
    res.send(userData)
})





module.exports = router