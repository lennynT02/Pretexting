import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

// Import routas
import usuariosRouter from './routes/user.routes.js'

// Instancias
const app = express()
dotenv.config()
app.use(cors())
app.use(morgan('dev'))

// Middlewares
app.use(express.json())

// Puerto ENV
app.set('port', process.env.PORT || 4000)

// Ruta Raiz
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API' })
})

// Rutas Api
app.use('/', usuariosRouter)

// Rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' })
})

export default app
