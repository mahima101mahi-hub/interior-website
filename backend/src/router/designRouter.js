import express from 'express'
import {  DeleteDesign, GetAllDesign, GetDesignbyId, pro } from '../controller/designController.js'
const designRouter=express.Router()
designRouter.post('/',pro)
designRouter.get('/all',GetAllDesign)
designRouter.get('/byId/:id',GetDesignbyId)
designRouter.delete('/dell/:id',DeleteDesign)
export default designRouter