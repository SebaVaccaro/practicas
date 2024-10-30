
import { changeStatePublicationUtilitis } from "../../utilitis/publication/changeState.publication.utilitis.js.js";

export const changeStatePublicationService = async ({publicationState,publication}) => {
    try {
        changeStatePublicationUtilitis(publication, publicationState)
        await publication.save()
        return
    } catch (err) {
        console.error(err.message);
        throw new Error(err.message);
    }
};
