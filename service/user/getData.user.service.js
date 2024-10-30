import { User } from "../../model/schema/user.schema.model.js"

export const getUserData = async (id) => {
    try{
        const user = await User.findById(id)
        if (!updatedUser) {
            throw new Error("User not found");
        }
        return user
    }catch(err){
        console.error(err.message)
        throw new Error("no se pudo acceder a buscar el usuario")
    }
}