import { getPublicationService } from "../../service/publication/get.publication.service.js"

export const getPublicationController = async (req, res) => {
    try{
        const publication = await getPublicationService(req.publication.id)
        res.status(200).send(publication)
    }catch(err){
        console.log(err)
        res.status(400).send("no fue posible acceder a la publicacion")
    }
}