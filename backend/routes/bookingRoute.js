import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
import { createBooking, getBookingAll, getBookingById } from '../controllers/bookingController.js';

const bookingRouter = express.Router();


bookingRouter.post('/', verifyUser, createBooking);
bookingRouter.get('/:id', verifyUser, getBookingById);
bookingRouter.get('/', verifyAdmin, getBookingAll);

export default bookingRouter;