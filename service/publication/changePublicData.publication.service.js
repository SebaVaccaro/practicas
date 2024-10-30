import { changePublicDataPublicationUtilitis } from "../../utilitis/publication/changePublicData.publication.utilitis.js"

export const changePublicDataPublicationService = async ({publicData,publication}) => {
    try {
        changePublicDataPublicationUtilitis(publication, publicData)
        await publication.save()
        return
    } catch (err) {
        console.log(err.message)
        throw new Error(err.message)
    }
} 
