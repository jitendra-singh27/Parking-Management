const mongoose=require('mongoose')

const RegisterSchema=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    username:String,
    gender:String,
    password:String
})


module.exports=mongoose.model('register',RegisterSchema)