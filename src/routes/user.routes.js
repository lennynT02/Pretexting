import { Router } from 'express'
import { registro } from '../controllers/user.controller.js'

const usuariosRouter = Router()

usuariosRouter.get('/registro', registro)

export default usuariosRouter
