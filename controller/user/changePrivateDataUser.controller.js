import { changePrivateDataService } from "../../service/user/changePrivateData.user.service.js"

export const changePrivateDataUserController = async (req, res) =>{
    try{
        await changePrivateDataService(req)
        res.status(200).send("user data private is changed")
    }catch(err){
        console.error(err.message)
        res.status(500).send("service error")
    }
}