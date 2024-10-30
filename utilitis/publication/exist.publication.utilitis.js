import { getPublicationService } from "../../service/publication/get.publication.service"

export const getPublication = async (publicationId) => {
        const publication = await getPublicationService(publicationId)
        if(!publication){
            throw new Error("la publicacion no existe")
        }
}