import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

interface IUserRequest{
    name:string,
    email:string,
    password:string
}

class CreateUserRepository{
    async execute({name,email,password} : IUserRequest){
        if(!email || !name || !password){
            throw new Error("Missing data, fill all filds");
        }

        const userAlreadyExists = await UserSchema.findOne({
            email: email
        })

        if(userAlreadyExists){
            throw new Error("User email already exists")
        }

        const passwordHash = await hash(password,8);

        const user = await UserSchema.create({
            name: name,
            email: email,
            password: passwordHash
        })

        await user.save();

    }
}

export {CreateUserRepository};