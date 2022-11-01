import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserPerEmailController } from "./controllers/ListUserPerEmailController";
import { ListUsersController } from "./controllers/ListUsersController";
import dotenv from "dotenv";
dotenv.config();

//Connectando no mongo
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.SECRET}@wherecoffebd.zgrs6ae.mongodb.net/WhereCoffe?retryWrites=true&w=majority`)
//----

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const listUserPerEmailController = new ListUserPerEmailController();

router.get("/coffeShop", listUserController.handle);
router.get("/byCoffeShop", listUserPerEmailController.handle);

router.post("/coffeShop", createUserController.handle);



export {router};