import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import connectDB from './src/db/database.js'
import userRouter from './src/router/UserRouter.js'
import serviceRouter from './src/router/serviceRouter.js'
import appoinmentRouter from './src/router/appoinmentRouter.js'
import orderRouter from './src/router/orderRouter.js'
import reviewRouter from './src/router/reviewRouter.js'
import inquiryRouter from './src/router/inquiryRouter.js'
import themeRouter from './src/router/themeRouter.js'
import designRouter from './src/router/designRouter.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! and welcome to the home-page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(express.json())
app.use(cors())
connectDB()
app.use('/user',userRouter)
// app.use('/designer',designerRouter)
app.use('/design',designRouter)
app.use('/service',serviceRouter)
app.use('/appoinment',appoinmentRouter)
app.use('/order',orderRouter)
app.use('/review',reviewRouter)
app.use('/inquiry',inquiryRouter)
app.use('/theme',themeRouter)
