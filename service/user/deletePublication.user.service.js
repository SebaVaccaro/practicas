import { User } from "../../model/schema/user.schema.model.js"

export const deleteUserPublicationService = async (data) => {
    const {id, publicationId} = data
    try{

        const user = await User.findById(id)
        
        if(!user.publications.includes(publicationId)){
            throw new Error("la publicacion no existe")
        } 

        const publicationsNew = user.publications.filter((publication)=>publication.toString() !== publicationId)

        user.publications = publicationsNew
        const userUpdate = await user.save()
        
        return userUpdate
    
    }catch(err){
        console.error(err.message)
        throw new Error(err.message)
    }
}