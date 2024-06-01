const ElecM=require('../model/electrcity')

exports.AllCustomerDataElectricity=async (req,res)=>{
    const record=await ElecM.find()
    res.render("Elect/AllCustomerDataElectricity.ejs",{record})
}

exports.NewCustermerDetails=(req,res)=>{
    res.render("Elect/NewCustermerDetails.ejs")
}

//Add Electricty Customer
exports.RecordDataElec=async function (req,res){
    console.log(req.body)
    const{name,address,preading,mtype,mobile,knumber}=req.body
    const record=new ElecM({name:name,address:address,mtype:mtype,preading:preading,mobile:mobile,knumber:knumber})
    await record.save()
    console.log(record)
    res.redirect('/Elect/electrcity')
}


//Delete Electricty Customer
exports.DeleteReading=async function (req,res){
    console.log(req.params.id)
    const id=req.params.id
    await ElecM.findByIdAndDelete(id)
    res.redirect('/Elect/electrcity')

}


//Reading Meter
exports.MeterReading=async (req,res)=>{ 
    const id=req.params.id
    const record=await  ElecM.findByIdAndUpdate(id)
    res.render("Elect/ReadingMeter.ejs",{record})
}


exports.NewCustRecData=(req,res)=>{
    console.log(req.body)
    

}

