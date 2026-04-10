import express from 'express'
import { contact, DeleteInquiry, GetAllInqiury, GetInquiryById } from '../controller/inquiryController.js'
const inquiryRouter=express.Router()
inquiryRouter.post('/',contact)
inquiryRouter.get('/all',GetAllInqiury)
inquiryRouter.get('/ById/:id',GetInquiryById)
inquiryRouter.delete('/dell/:id',DeleteInquiry)
export default inquiryRouter