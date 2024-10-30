import { deleteMatchesUtilitis } from "../../utilitis/publication/deleteMatches.publication.utilitis.js";

export const deleteMatchesPublicationService = async ({publication, user}) => {
    try {
        deleteMatchesUtilitis(publication, user.id)
        deleteMatchesUtilitis(user, publication.id)
        await publication.save()
        return
    } catch (err) {
        console.error(err.message);
        throw new Error(err.message);
    }
};
