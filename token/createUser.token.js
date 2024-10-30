import jwt from "jsonwebtoken"

export const createUserToken = (data) => {
    try{
        const token = jwt.sign({id: data}, "seba1234")
        return token
    }catch(err){
        console.log(err)
        throw new Error(err.message)
    }
}