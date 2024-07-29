import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

//Middlewares::
app.use(express.json())
app.use(cookieParser())

// app.use('/api/auth',authRoutes)

export default app;