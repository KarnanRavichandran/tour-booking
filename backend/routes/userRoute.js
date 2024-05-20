import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser} from '../controllers/userController.js'

const userRouter = express.Router();

import { verifyUser } from '../utils/verifyToken.js';

userRouter.post('/', createUser)
userRouter.put('/:id',verifyUser, updateUser)
userRouter.delete('/:id',verifyUser,deleteUser)
userRouter.get('/:id',verifyUser, getSingleUser)
userRouter.get('/', getAllUser)

export default userRouter;