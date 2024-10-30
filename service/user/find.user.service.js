import { User } from "../../model/schema/user.schema.model.js"

export const findUser = async (id) => {
    try{
        const user = await User.findById(id)
        return user
    }catch(err){
        console.log(err.message)
        throw new Error(err.message)
    }
}