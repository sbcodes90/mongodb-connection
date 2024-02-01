const mongoose = require('mongoose')

//create the schema
const UserSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String, required:true},
})

//create the model
const userCollection = new mongoose.model("users", UserSchema)

module.exports = userCollection;