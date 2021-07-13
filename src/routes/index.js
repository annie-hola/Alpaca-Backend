import express from 'express'
import { createNewUser, deleteUser, getAllUser, updateUser, activeUser, sortUserByRole, sortUserByPlan } from '../controllers/User.js';
const router = express.Router();
router.post('/createUser', createNewUser);
router.get('/getUser', getAllUser);
router.patch('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);
router.patch('/activeUser/:userId', activeUser);
router.post('/sortRole', sortUserByRole);
router.post('/sortPlan', sortUserByPlan);


export default router;