import { changePublicDataService } from "../../service/user/changePublicData.user.service.js"

export const changePublicDataUserController = async (req, res) => {
    try{
        await changePublicDataService(req)
        res.status(200).send({message: "user data change succesfull"})
    }catch(err){
        console.error(err.message)
        res.status(500).send("service error")
    }
}