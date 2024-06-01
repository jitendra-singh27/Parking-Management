const express=require('express')
const app=express()
app.use(express.urlencoded({extended:false}))
require('dotenv').config()
const session=require('express-session')
const Router=require('./routers/frontend')
const mongoose=require('mongoose')
mongoose.connect(process.env.DB_URL+'/'+process.env.DB_NAME)





app.use(session({
    secret:"key",
    resave:false,
    saveUninitialized:false,
    
}))
app.use('/',Router)
app.use(express.static("public"))
app.set('view engine','ejs')
app.listen(process.env.PORT,console.log(`Successfull Connected ${process.env.PORT}`))
