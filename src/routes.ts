import {Router} from "express";

import mongoose from "mongoose";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserPerEmailController } from "./controllers/ListUserPerEmailController";
import { ListUsersController } from "./controllers/ListUsersController";
import dotenv from "dotenv";
dotenv.config();

//Connectando no mongo
mongoose.connect(`mongodb+srv://eng_soft:12345678910@wherecoffebd.zgrs6ae.mongodb.net/WhereCoffe?retryWrites=true&w=majority`)
//----

const router = Router();

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const listUserPerEmailController = new ListUserPerEmailController();

router.get("/coffeShop", listUserController.handle);
router.get("/byCoffeShop", listUserPerEmailController.handle);

router.post("/coffeShop", createUserController.handle);



export {router};