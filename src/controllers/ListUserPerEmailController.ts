import {Response, Request} from "express";
import { ListUserPerEmailRepository } from "../repositories/ListUserPerEmailRepository";
const url = require('url');


class ListUserPerEmailController{
    async handle(request:Request, response: Response){
        const listUserPerEmailRepository = new ListUserPerEmailRepository();

        const email = request.query.email;

        const users = await listUserPerEmailRepository.execute(String(email));
        
        console.log((users.query.email))
        return response.json(users);
    }
}

export {ListUserPerEmailController};