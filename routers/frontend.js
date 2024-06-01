const router=require('express').Router()
const registerc=require('../controller/regsitercontroller')
const parkingc=require('../controller/parkingcontroller')
const electc=require('../controller/electricitycontroller')

router.get('/',registerc.showregisterpage)
router.post('/regrec',registerc.registerrecord)

router.get('/login',registerc.showloginpage)
router.post('/logrec',registerc.loginrec)


router.get('/projectmange',registerc.projectmange)

//parking
router.get('/parking',parkingc.indexpageshow)
router.get('/newentry',parkingc.newentryvehicle)
router.post('/addnew',parkingc.vehiclenewentryrecord)
//router.get('/statusout/:id',parkingc.statusshhow)
router.get('/outparkrecord/:id',parkingc.VehicleOutTime)
router.get('/printout/:id',parkingc.PrintParking)


//electricity
router.get('/Elect/electrcity',electc.AllCustomerDataElectricity)
router.get('/Elect/NewCustermerDetails',electc.NewCustermerDetails)
router.post('/Elect/NewCustRecData',electc.RecordDataElec)

//ElectringDelete
router.get('/Elect/DeleteReading/:id',electc.DeleteReading)

//Elereading
router.get('/Elect/MeterReading/:id',electc.MeterReading)
router.get('/Elect/NewCustRecData',)


module.exports=router