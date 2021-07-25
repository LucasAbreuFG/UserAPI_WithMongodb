import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserPerEmailController } from "./controllers/ListUserPerEmailController";
import { ListUsersController } from "./controllers/ListUsersController";

//Connectando no mongo
const uri = "mongodb+srv://userInformation:12345@userinformation.bllpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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