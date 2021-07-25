import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserPerEmailController } from "./controllers/ListUserPerEmailController";
import { ListUsersController } from "./controllers/ListUsersController";

//Connectando no mongo
const uri = "YourConnection";
mongoose.connect(uri);
//----

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const listUserPerEmailController = new ListUserPerEmailController();

router.get("/users", listUserController.handle);
router.get("/usersEmail", listUserPerEmailController.handle);

router.post("/user", createUserController.handle);



export {router};