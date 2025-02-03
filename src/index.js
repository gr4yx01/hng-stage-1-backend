import express from 'express'
import cors from 'cors'
import apiRouter from './routers/index.js'

const app = express()

app.use(cors())

app.use('/api', apiRouter)

app.listen('3000', () => {
    console.log('connected successfully')
})