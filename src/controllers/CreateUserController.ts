import {Request, Response} from "express";
import { CreateUserRepository } from "../repositories/CreateUserRepository";

class CreateUserController{
    async handle(request: Request, response:Response){
        const {
            coffeShopName,
            CNPJ,
            country ,
            district ,
            UF ,
            street ,
            CEP,
            shopNumber,
            category,
            serviceHour,
        } = request.body;

        const createUserRepository = new CreateUserRepository();

        const user = await createUserRepository.execute(
            {
            coffeShopName,
            CNPJ,
            country ,
            district ,
            UF ,
            street ,
            CEP,
            shopNumber,
            category,
            serviceHour}
        );
        
        return response.json(user);
    }
}

export { CreateUserController };