const ParkingM=require('../model/parking')



exports.newentryvehicle=(req,res)=>{
    res.render("newentry.ejs")
}

exports.indexpageshow=async(req,res)=>{
    const record =await ParkingM.find()
    res.render('parking.ejs',{record})
}





exports.vehiclenewentryrecord=async (req,res)=>{
    console.log(req.body)
    const{vnumber,vtype}=req.body
   const record=new ParkingM({vnumber:vnumber,vtype:vtype,vintime:new Date()})
    await  record.save()
    console.log(record) 
    res.redirect('/parking')
    
    //res.redirect('/index')
}

exports.statusshhow=(req,res)=>{
    const id=req.params.id
    res.render('parkoutform.ejs',{id})
    
}

exports.VehicleOutTime=async (req,res)=>{
    const id=req.params.id
    //const {vouttime}=req.body
    let vouttime=new Date()
    const record=await ParkingM.findById(id)
    const totaltime=(vouttime-record.vintime)/(1000*60*60)
    let amount=0
    if(record.vtype=='2 Wheeler'){
        amount=Math.round(totaltime*20)
    }
    else if(record.vtype=='3 Wheeler'){
        amount=Math.round(totaltime*30)
    }
     else if(record.vtype=='4 Wheeler'){
        amount=Math.round(totaltime*80)
    }
    else if(record.vtype=='Light Wheeler'){
        amount=Math.round(totaltime*120)
    }
    else if(record.vtype=='Heavy Wheeler'){
        amount=Math.round(totaltime*150)
    }
    else {
        amount=Math.round(totaltime*200)
    }
    if(amount<=10){
        amount=10
    }
    await ParkingM.findByIdAndUpdate(id,{vouttime:vouttime,vamount:amount,vstatus:'OUT'})
    res.redirect('/parking')
}


exports.PrintParking=async (req,res)=>{
    const id=req.params.id
    const result=await ParkingM.findById(id)
    res.render('printparking.ejs',{result})
}