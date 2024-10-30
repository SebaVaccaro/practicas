import { getPublicationUtilitis } from "./get.publication.utilitis.js"

export const createByPublicationUtilitis = async (publicationId) => {
    try {
        const publication = await getPublicationUtilitis(publicationId)
        return publication.createdBy
    } catch (err) {
        throw new Error(err)
    }
}