import { UserSchema } from "../models/userModel";

class ListUserPerEmailRepository{
    async execute(emailUser: string){
        const email = UserSchema.find({email: emailUser});
        return email;
    }
}

export {ListUserPerEmailRepository}