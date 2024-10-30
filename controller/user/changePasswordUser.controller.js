import { changePasswordUserService } from "../../service/user/changePassword.user.service.js"

export const changePasswordUserController = async (req, res) =>{
    try{
        await changePasswordUserService(req)
        res.status(200).send({message:"user data change succesfull"})
    }catch(err){
        console.error(err)
        res.status(500).send("service error")
    }
}