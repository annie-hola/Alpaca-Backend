import express from 'express'
import {
    createNewUser,
    deleteUser,
    getAllUser,
    updateUser,
    activeUser,
    sortUserByRole,
    sortUserByPlan
} from '../app/controllers/UserController.js';

import {
    LogIn
} from '../app/controllers/AuthController.js'

const router = express.Router();
router.post('/createUser', createNewUser);
router.get('/getUser', getAllUser);
router.patch('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);
router.patch('/activeUser/:userId', activeUser);
router.post('/sortRole', sortUserByRole);
router.post('/sortPlan', sortUserByPlan);
router.post('/login', LogIn);

export default router;