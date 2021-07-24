import {Request, Response} from "express";
import { CreateUserRepository } from "../repositories/userRepositories";

class CreateUserController{
    async handle(request: Request, response:Response){
        const {name,email, password} = request.body;

        const createUserRepository = new CreateUserRepository();

        const user = await createUserRepository.execute({name, email, password});
        
        return response.json(user);
    }
}

export { CreateUserController };