import express from 'express'
import { DeleteService, GetAllservice, GetServiceById, GetServiceByName, serve } from '../controller/serviceControlller.js'
const serviceRouter=express.Router()
serviceRouter.post('/',serve)
serviceRouter.get('/all',GetAllservice)
serviceRouter.get('/ById/:id',GetServiceById)
serviceRouter.get('/ByName/:Name',GetServiceByName)
serviceRouter.delete('/dell/:id',DeleteService)
export default serviceRouter