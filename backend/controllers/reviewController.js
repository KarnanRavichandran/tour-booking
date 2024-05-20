import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async(req,res,next)=>{
    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

    try {
     const saveReview = await newReview.save()

     await Tour.findByIdAndUpdate(tourId,{
        $push:{reviews:saveReview._id}
     })
     return res.status(200).json({ success: true, message: "Review Submitted", data: saveReview })
        
    } catch (error) { 
        console.log(error)
        return res.status(400).json({ success: false, message: "faild to submit .Try again" })
    }
}