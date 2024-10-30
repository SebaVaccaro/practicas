
import { Publication } from "../../model/schema/publication.schema.model.js"

export const getPublicationUtilitis = async (publicationId) => {
    try{
        const publication = await Publication.findById(publicationId)
        if(!publication){
            throw new Error("no existe la publicacion")
        }
        return publication
    }catch(err){
        throw new Error("error al acceder a la db de publications")
    }
}