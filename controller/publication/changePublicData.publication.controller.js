import { changePublicDataPublicationService } from "../../service/publication/changePublicData.publication.service.js"

export const changePublicDataController = async (req, res) => {
    try{
        await changePublicDataPublicationService(req)
        res.status(200).send("update publicdata succesfull")
    }catch(err){
        console.log(err)
        res.send(err)
    }
}