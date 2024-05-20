import Tour from "../models/Tour.js";
import Review from "../models/Review.js"

export const createTour = async (req, res, next) => {
    const newTour = await Tour(req.body)
    try {
        const saveTour = await newTour.save()
        return res.status(200).json({ success: true, message: "Successfully created", data: saveTour })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: "faild to created .Try again" })

    }
}

export const updateTour = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updatedTour) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "Tour not found" });
        }

        return res.status(200).json({ success: true, message: "Successfully updated", data: updatedTour });
    } catch (error) {
        console.error("Error updating tour:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Failed to update. Please try again later." });
    }
}


export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id);

        if (!deletedTour) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "Tour not found" });
        }

        return res.status(200).json({ success: true, message: "Successfully deleted", });
    } catch (error) {
        console.error("Error deleting tour:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Failed to deleted. Please try again later." });
    }
}

export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate('reviews')

        if (!tour) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "Tour not found", });
        }

        return res.status(200).json({ success: true, message: "Successfully find your Tour", data: tour });
    } catch (error) {
        console.error("Error finding tour:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Tour not found" });
    }
}


export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page);
    try {
        const tours = await Tour.find({})
        .populate('reviews') // Make sure this matches the field name in your "Tour" model
        .skip(page * 8)
        .limit(8);


        if (!tours) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "Tour not found", });
        }

        return res.status(200).json({ success: true, count: tours.length, message: "Successfully All your Tour", data: tours });
    } catch (error) {
        console.error("Error finding tour:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Tour not found" });
    }
}


export const getTourBySearch = async (req, res) => {

    // here i means case sensitive
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        // get means greater than equal 
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews')
        return res.status(200).json({ success: true, message: "Successfully", data: tours });
    } catch (error) {
        return res.status(404).json({ success: false, message: "not found" });

    }
}


export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate('reviews').limit(8)
        return res.status(200).json({ success: true, message: "Successfull", data: tours });
    } catch (error) {
        console.error("Error finding tour:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Tour not found" });
    }
}


export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        return res.status(200).json({ success: true, message: "Successfull", data: tourCount });

    } catch (error) {
        console.error("Error finding tour:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Tour not found" });
    }
}

