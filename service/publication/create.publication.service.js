import { Publication } from "../../model/schema/publication.schema.model.js"

export const createPublicationService = async ({data}) => {
    try{
        const newPublication = new Publication(data)
        const publication = await newPublication.save()
        console.log(publication)
        return
    }catch(err){
        console.log(err.message)
        throw new Error(err.message)
    }
}