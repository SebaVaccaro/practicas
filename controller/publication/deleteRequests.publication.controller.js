import { deletePublicationRequestsService } from "../../service/publication/deleteRequests.pubication.service.js"

export const deleteRequestsPublicationController = async (req, res) => {
    try{
        await deletePublicationRequestsService(req)
        res.status(200).send("se elimino correctamente la request de la publicacion")
    }
    catch(err){
        console.log(err)
        res.send(err.message)
    }
}