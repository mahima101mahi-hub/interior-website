import express from 'express'
import { Appo, DeleteAppoinment, GetAllAppoinment, GetAllAppoinmentofUser, GetAppoinmentById,  GetAppoinmentUpdates} from '../controller/appoinmentController.js'
const appoinmentRouter=express.Router()
appoinmentRouter.post('/',Appo)
appoinmentRouter.get('/all',GetAllAppoinment)
appoinmentRouter.get('/userApp/:userId',GetAllAppoinmentofUser)
appoinmentRouter.get('/ById/:id',GetAppoinmentById)
// appoinmentRouter.get('/GetAppoinmentByuserId/:id',GetAppoinmentByuserId)
appoinmentRouter.delete('/dell/:id',DeleteAppoinment)
appoinmentRouter.put('/ById/:id',GetAppoinmentUpdates)
export default appoinmentRouter
