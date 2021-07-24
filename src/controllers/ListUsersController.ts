import {Request, Response} from "express";
import { ListUserRepository } from "../repositories/ListUsersRepository";

class ListUsersController{
    async handle(request: Request, response: Response){
        const listUserRepository = new ListUserRepository();

        const users = await listUserRepository.execute();

        return response.json(users);

    }
}

export {ListUsersController};