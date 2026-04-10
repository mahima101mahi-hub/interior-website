import express from 'express'
import { Buy, DeleteOrder, GetAllOrder, GetOrderById} from '../controller/orderController.js'
const orderRouter=express.Router()
orderRouter.post('/',Buy)
orderRouter.get('/all',GetAllOrder)
orderRouter.get('/ById/:id',GetOrderById)
orderRouter.delete('/dell/:id',DeleteOrder)
export default orderRouter