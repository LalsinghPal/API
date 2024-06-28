const express = require("express")
const Teachercontroller = require("../controllers/Teachercontroller")
const Usercontroller = require("../controllers/Usercontroller")
const route = express.Router()
const {ChangeUserAuth} = require("../Middleware/auth");
const categorycontroller = require("../controllers/categorycontroller");


//route
//http://localhost:4000/api/teacherDisplay
//teachercontrollerapi
route.get('/teacherDisplay',Teachercontroller.display)


//usercontroller api
route.post('/userInsert',Usercontroller.registerUser)
route.get('/getAllUser', ChangeUserAuth,Usercontroller.getAllUser)
route.post('/loginUser',Usercontroller.loginUser)
route.get('/logout',Usercontroller.logout)
route.post('/updatePassword', ChangeUserAuth,Usercontroller.updatePassword)
route.post('/updateProfile', ChangeUserAuth,Usercontroller.updateProfile)
route.get('/admin/getUser/:id', Usercontroller.getSingleUser)
route.get('/me', ChangeUserAuth, Usercontroller.getUserDetail)
route.delete('/admin/deleteUser/:id', Usercontroller.deleteUser)


//category controller
route.post('/categoryinsert',categorycontroller.categoryinsert)
route.get('/categoryview',categorycontroller.categoryview)
route.delete('/categorydelete/:id', categorycontroller.categorydelete)











module.exports=route