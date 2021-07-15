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
<<<<<<< HEAD
    LogOut,
} from '../app/controllers/UserController.js';
// Middleware
import Authen from '../middlewares/authJwt.js';

=======
    LogOut
} from '../app/controllers/UserController.js';
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
const router = express.Router();
router.post('/users', createNewUser);
router.get('/getUsers', getAllUser);
router.patch('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);
router.patch('/activeUser/:userId', activeUser);
router.post('/sortRole', sortUserByRole);
router.post('/sortPlan', sortUserByPlan);
router.post('/logIn', LogIn);
<<<<<<< HEAD
router.post('/logOut', Authen, LogOut);
=======
router.post('/logOut', LogOut)

>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6

export default router;