import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";


//Connectando no mongo
const uri = "YourConnectURL";
mongoose.connect(uri);
//----

const router = Router();

const createUserController = new CreateUserController();

router.post("/user", createUserController.handle);



export {router};