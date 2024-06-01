const mongoose=require('mongoose')

const parkingSchema=mongoose.Schema({
    vnumber:String,
    vtype:String,
    vintime:Date,
    vouttime:Date,
    vstatus:{type:String,default:'IN'},
    vamount:Number
})


module.exports=mongoose.model('parking',parkingSchema)