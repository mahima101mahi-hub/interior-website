import express from 'express'
import { DeleteUser, GetAllUser, GetUSerById, GetUserByName,login,Register} from '../controller/userController.js'
const userRouter=express.Router()
userRouter.post('/',Register)
userRouter.post('/login',login)
userRouter.get('/all',GetAllUser)
userRouter.get('/ById/:id',GetUSerById)
userRouter.get('/ByName/:FirstName',GetUserByName)
userRouter.delete('/dell/:id',DeleteUser)
export default userRouter