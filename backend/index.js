import expres from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRouter from './routes/tourRoute.js'
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import reviewRouter from './routes/reviewRoute.js'
import bookingRouter from './routes/bookingRoute.js'


dotenv.config()
const app = expres()
const port = process.env.PORT || 8000;

const corsOptions = {
    origin:true,
    credential:true
}

// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDb database connected')


    } catch (error) {
          console.log('Mongodb databse connection failed')
    }
}



// for testing
app.get('/', (req, res) => {
    res.send('api is working')
})


// middleware
app.use(expres.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser())
app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/review',reviewRouter)
app.use('/api/v1/booking',bookingRouter)


app.listen(port, () => {
    connect();
    console.log(`server listening on port `, port)
})