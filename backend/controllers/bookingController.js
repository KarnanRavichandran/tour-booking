import Booking from "../models/Booking.js"



export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();
        return res.status(200).json({ success: true, message: 'Your tour is booked', data: savedBooking })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Your tour is faild ', })
    }
}

export const getBookingById = async(req,res,next)=>{
    const id = req.params.id;
    try {
        const book = await Booking.findById(id)
        return res.status(200).json({ success: true, message: 'successful', data: book })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Tour Not found by id ', })
    }
}



export const getBookingAll = async(req,res,next)=>{
    try {
        const books = await Booking.findById()
        return res.status(200).json({ success: true, message: 'successful', data: books })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Tour Not found ', })
    }
}