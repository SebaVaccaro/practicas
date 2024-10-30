import { createPublicationService } from "../../service/publication/create.publication.service.js"

export const createPublicationController = async (req, res) => {
    try{
        await createPublicationService(req)
        res.status(200).send("publication created")
    }catch(err){
        console.log(err)
        res.status(500).send("error del servidor")
    }
}