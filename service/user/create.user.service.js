import { User } from "../../model/schema/user.schema.model.js"

export const createUserService = async (data) => {
    if (!data) throw new Error("Failed, no data")
    console.log(data)
    try {
        const newUser = new User(data)
        const user = await newUser.save()
        return user
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}