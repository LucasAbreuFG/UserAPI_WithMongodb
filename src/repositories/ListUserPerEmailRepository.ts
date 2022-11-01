import { UserSchema } from "../models/userModel";

class ListUserPerEmailRepository{
    async execute(coffeShopName: string){
        const coffeName = UserSchema.find({coffeShopName: coffeShopName});
        return coffeName;
    }
}

export {ListUserPerEmailRepository}