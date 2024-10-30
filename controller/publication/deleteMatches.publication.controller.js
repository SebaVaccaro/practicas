import { deleteMatchesPublicationService } from "../../service/publication/deleteMatches.publication.service.js"

export const deleteMatchesPublicationController = async (req, res) => {
    try{
        await deleteMatchesPublicationService(req)
        res.status(200).send("se elimino correctamente el match de la publicacion")
    }catch(err){
        console.log(err)
        res.send(err)
    }
}