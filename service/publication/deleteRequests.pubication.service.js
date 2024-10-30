import { deleteRequestsUtilitis } from "../../utilitis/publication/deleteRequests.publication.utilitis.js"

export const deletePublicationRequestsService = async ({publication, user}) =>{
    try {
        deleteRequestsUtilitis(publication, user.id)
        deleteRequestsUtilitis(user, publication.id)
        await publication.save()
        return 
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}