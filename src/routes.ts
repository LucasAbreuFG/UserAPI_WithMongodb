import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";


//Connectando no mongo
const uri = "YourMongoURL";
mongoose.connect(uri);
//----

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();

router.get("/users", listUserController.handle);

router.post("/user", createUserController.handle);



export {router};