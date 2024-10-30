import { getPublicationService } from "../../service/publication/get.publication.service.js"
import { getUserData } from "../../service/user/getData.user.service.js"

export const getDataMiddleware = async (req, res, next) => {
    try{
        const {tokenData} = req
        const {publicationId} = req.publicationId
        const user = await getUserData(tokenData.id)
        const publication = await getPublicationService(publicationId)
        req.publication = publication
        req.user = user
        next()
    }catch(err){
        next(err)
    }
}