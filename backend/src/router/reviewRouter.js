import express from 'express'
import { DeleteReview, GetAllRevew, GetReviewById, rating } from '../controller/ReviewController.js'
const reviewRouter=express.Router()
reviewRouter.post('/',rating)
reviewRouter.get('/all',GetAllRevew)
reviewRouter.get('/ById/:id',GetReviewById)
reviewRouter.delete('/dell/:id',DeleteReview)
export default reviewRouter