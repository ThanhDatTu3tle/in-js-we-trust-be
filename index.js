import express from 'express';

// middleware
import bodyParser from 'body-parser';
import cors from 'cors';    
import mongoose, { mongo } from 'mongoose';

// routes
import question from './routers/question.route.js';

const app = express()
const PORT = process.env.port || 5000
const URI = 'mongodb+srv://tu3tle:dat27032001@cluster0.tmunkuo.mongodb.net/?retryWrites=true&w=majority'
// use middleware
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

// use routes
app.use('/question', question)

mongoose.set('strictQuery', false)
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to database!!!`)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch(err => {
        console.log('Error!!!', err)
    })
