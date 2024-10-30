import { addMatchPublicationService } from "../../service/publication/addMatch.publication.service.js"

export const addMatchesPublicationController = async (req, res) =>{
    try{
        await addMatchPublicationService(req)
        res.status(200).send("add match succesfull")
    }catch(err){
        console.log(err)
        res.status(err.status || 500).send(err.message)
    }
}