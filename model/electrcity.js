const mongoose=require('mongoose')


const electrcitySchema=mongoose.Schema({
    name:String,
    address:String,
    mobile:Number,
    knumber:String,
    preading:Number,
    creading:Number,
    mtype:String,
    mchargeamount:Number,

})







module.exports=mongoose.model('electrcity',electrcitySchema)