const RegisterM=require('../model/register')
const bcrypt=require('bcrypt')



function handlelogin(req,next,res){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect("/login")
    }

}

exports.showregisterpage=(req,res)=>{
    res.render('Register.ejs')
}


exports.showloginpage=(req,res)=>{
    res.render('Login.ejs',{message:''})
}

exports.registerrecord=async (req,res)=>{
    const{fname,lname,email,username,gender,password}=req.body
   const converedpass=await bcrypt.hash(password,10)
    const usernamecheck= await RegisterM.findOne({username:username})
    if(usernamecheck==null){
    const record=new RegisterM({fname:fname,lname:lname,email:email,username:username,gender:gender,password:converedpass})
    await record.save()
    console.log(record)
    //res.render('register.ejs',{message:'Account Successfully Created'})

    }else{
        res.send (`${username} : Username  Alredy Existed Plz Try Another Username`)
    }
    res.redirect('/login')
}


exports.loginrec=async (req,res)=>{
    console.log(req.body)
    const{email,password}=req.body
    const record=await RegisterM.findOne({email:email})
    console.log(record)
    if(record!=='null'){
        const encryptpass=await bcrypt.compare(password,record.password)
        console.log(encryptpass)
        if(encryptpass){
            res.redirect('/projectmange')
        }else{
            res.render('Login.ejs',{message:'You have entered an invalid username / password combination.'})
        }
    } else{
        res.render('Login.ejs',{message:'You have entered an invalid username / password combination.'})
    }

}

exports.projectmange=(req,res)=>{
    res.render('ProjectManger.ejs')
}









