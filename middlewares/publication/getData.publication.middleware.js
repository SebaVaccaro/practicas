import { getPublicationUtilitis } from "../../utilitis/publication/get.publication.utilitis.js"
import { getUserUtilitis } from "../../utilitis/users/get.user.utilitis.js"

export const getDataPublicationMiddleware = async (req, res, next) => {
    try{
        const {userId} = req.token
        const {publicationId} = req.params.id
        const user = await getUserUtilitis(userId)
        const publication = await getPublicationUtilitis(publicationId)
        req.publication = publication
        req.user = user
        next()        
    }catch(err){next(err)}
}