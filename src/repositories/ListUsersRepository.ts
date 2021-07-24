import { UserSchema } from "../models/userModel";

class ListUserRepository{
    async execute(){
        const users = await UserSchema.find();

        return (users);
    }
}

export {ListUserRepository};