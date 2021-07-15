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
    LogOut,
} from '../app/controllers/UserController.js';
// Middleware
import Authen from '../middlewares/authJwt.js';

const router = express.Router();
router.post('/users', createNewUser);// done
router.get('/getUsers', getAllUser);//done
router.patch('/updateUser/:userId', updateUser);//done
router.delete('/deleteUser/:userId', deleteUser);//done
router.patch('/activeUser/:userId', activeUser);//done
router.post('/sortRole', sortUserByRole);//done
router.post('/sortPlan', sortUserByPlan);// done
router.post('/logIn', LogIn);// done
router.post('/logOut', Authen, LogOut);

export default router;