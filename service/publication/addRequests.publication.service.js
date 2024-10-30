import { addRequestsUtilitis } from "../../utilitis/publication/addRequests.publication.utilitis.js"

export const addPublicationRequestService = async ({publication, user}) =>{
    try {
        addRequestsUtilitis(publication, user.id)
        addRequestsUtilitis(user, publication.id)
        
        await publication.save()
        await user.save()
        return 
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}