import { findUser } from "../../service/user/find.user.service.js"

export const existUser = async (userId) => {
    const user = await findUser(userId)
    if(!user){
        throw new Error("el usuario no existe")
    }
    return true
}