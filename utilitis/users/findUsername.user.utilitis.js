import { User } from "../../model/schema/user.schema.model.js"

export const findUsernameUserUtilitis = async (username) => {
    try{
        const user = await User.findOne({username})
        if(!user) throw new Error("No existe el usuario")
        return user
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}