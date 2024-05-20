import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour,getTourBySearch,getFeaturedTour,getTourCount } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';


const tourRouter = express.Router();

tourRouter.post('/',verifyAdmin, createTour)
tourRouter.put('/:id',verifyAdmin, updateTour)
tourRouter.delete('/:id',verifyAdmin, deleteTour)
tourRouter.get('/:id', getSingleTour)
tourRouter.get('/',getAllTour)
tourRouter.get('/search/getTourBySearch', getTourBySearch)
tourRouter.get('/search/getFeaturedTour', getFeaturedTour)
tourRouter.get('/search/getTourCount', getTourCount)

export default tourRouter;