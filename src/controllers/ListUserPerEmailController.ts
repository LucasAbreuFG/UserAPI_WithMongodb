import {Response, Request} from "express";
import { ListUserPerEmailRepository } from "../repositories/ListUserPerEmailRepository";
const url = require('url');


class ListUserPerEmailController{
    async handle(request:Request, response: Response){
        const listUserPerEmailRepository = new ListUserPerEmailRepository();

        const coffeShopName = request.query.coffeShopName;

        const users = await listUserPerEmailRepository.execute(String(coffeShopName));
        
        console.log((users.query.coffeShopName))
        return response.json(users);
    }
}

export {ListUserPerEmailController};