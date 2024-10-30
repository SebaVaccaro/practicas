import { findUser } from "../../service/user/find.user.service.js"

export const getUserUtilitis = async (userId) => {
    try{
        const user = await findUser(userId)
        return user
    }catch(err){
        throw new Error("error al conectarse a la base de datos para buscar el usuario")
    }
}