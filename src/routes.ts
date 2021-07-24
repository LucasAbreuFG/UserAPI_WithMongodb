import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";


//Connectando no mongo
const uri = "mongodb+srv://userInformation:12345@userinformation.bllpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);
//----

const router = Router();

const createUserController = new CreateUserController();

router.post("/user", createUserController.handle);



export {router};