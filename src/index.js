import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    console.log('Done')
})

app.listen('3000', () => {
    console.log('connected successfully')
})