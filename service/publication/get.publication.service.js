import { Publication } from "../../model/schema/publication.schema.model.js"

export const getPublicationService = async (publicationId) => {
    try{
        const publication = await Publication.findById(publicationId)
        if(!publication){
            throw new Error("no existe la publicacion")
        }
        return publication
    }catch(err){
        console.log(err.message)
        throw new Error(err)
    }
}