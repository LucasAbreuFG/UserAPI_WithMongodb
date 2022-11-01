
import { UserSchema } from "../models/userModel";

interface IUserRequest {
    coffeShopName: String,
    CNPJ: String,
    country: String,
    district: String,
    UF: String,
    street: String,
    CEP: String,
    shopNumber: Number,
    category: String,
    serviceHour: String,
}

class CreateUserRepository {
    async execute({
        coffeShopName,
        CNPJ,
        country,
        district,
        UF,
        street,
        CEP,
        shopNumber,
        category,
        serviceHour
    }: IUserRequest) {
        if (
            !coffeShopName ||
            !CNPJ ||
            !country ||
            !district ||
            !UF ||
            !street ||
            !CEP ||
            !shopNumber ||
            !category ||
            !serviceHour) {
            throw new Error("Missing data, fill all filds");
        }

        const userAlreadyExists = await UserSchema.findOne({
            coffeShopName: coffeShopName
        })

        if (userAlreadyExists) {
            throw new Error("User email already exists")
        }

        const user = await UserSchema.create({
            coffeShopName,
            CNPJ,
            country,
            district,
            UF,
            street,
            CEP,
            shopNumber,
            category,
            serviceHour
        })

        await user.save();

    }
}

export { CreateUserRepository };