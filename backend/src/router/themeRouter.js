import express from 'express'
import { DeleteTheme, GetAllTheme, GetThemeById, themes } from '../controller/themeController.js'
const themeRouter=express.Router()
themeRouter.post('/',themes)
themeRouter.get('/all',GetAllTheme)
themeRouter.get('/ById/:id',GetThemeById)
themeRouter.delete('/dell/:id',DeleteTheme)
export default themeRouter