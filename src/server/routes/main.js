import express from 'express'
import { createNewUser, deleteUser, getAllUser, UpdateUser } from '../controllers/User.js';
const router = express.Router();
router.post('/createUser', createNewUser);
router.get('/getUser', getAllUser);
router.patch('/updateUser/:userId', UpdateUser);
router.delete('/deleteUser/:userId', deleteUser);

export default router;