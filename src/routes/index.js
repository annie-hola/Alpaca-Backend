import express from 'express'
import {
    createNewUser,
    deleteUser,
    getAllUser,
    updateUser,
    activeUser,
    sortUserByRole,
    sortUserByPlan,
    LogIn,
    LogOut
} from '../app/controllers/UserController.js';
const router = express.Router();
router.post('/users', createNewUser);
router.get('/getUsers', getAllUser);
router.patch('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);
router.patch('/activeUser/:userId', activeUser);
router.post('/sortRole', sortUserByRole);
router.post('/sortPlan', sortUserByPlan);
router.post('/logIn', LogIn);
router.post('/logOut', LogOut)


export default router;