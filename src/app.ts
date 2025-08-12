import express, { Application } from 'express'
import cors from 'cors'
import './common/env'
import errorHandler from './middlewares/errorHandler'

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization,Bearer',
  credentials: true,
}

const app: Application = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(errorHandler)

export default app
