import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IUserInterface{
    name: string,
    email: string,
    password: string
}
 
const schema = new Schema({
    name: {
        type:String,
        require:true,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const UserSchema = mongoose.model('user', schema);
export {UserSchema};
