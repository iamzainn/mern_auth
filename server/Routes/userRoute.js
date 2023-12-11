import  express from "express";
import { getProfile, login, logout, registration, updateProfile } from "../controllers/userController.js";
import { validateToken } from "../controllers/JWT/token.js";
const userRoute = express.Router();
userRoute.post('/register',registration);
userRoute.post('/auth',login);
userRoute.get('/profile',validateToken,getProfile);
userRoute.get('/profile/update',validateToken,updateProfile);
userRoute.post('/logout',logout);



export default userRoute;