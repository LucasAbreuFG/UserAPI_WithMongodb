import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IUserInterface{
    coffeShopName: String,
    CNPJ: String,
    country : String,
    district : String,
    UF : String,
    street : String,
    CEP: String,
    shopNumber : Number,
    category: String,
    serviceHour: String,
}
 
const schema = new Schema({
    coffeShopName: {
        type: String,
        required: true
    },
    CNPJ: {
        type: String,
        requires: true
    },
    country: {
        type: String,
        requires: true
    },
    district: {
        type: String,
        requires: true
    },
    UF: {
        type: String,
        requires: true
    },
    street: {
        type: String,
        requires: true
    },
    CEP: {
        type: String,
        requires: true
    },
    shopNumber: {
        type: Number,
        requires: true
    },
    category: {
        type: String,
        requires: true
    },
    serviceHour: {
        type: String,
        requires: true
    },
})

const UserSchema = mongoose.model('user', schema);
export {UserSchema};
