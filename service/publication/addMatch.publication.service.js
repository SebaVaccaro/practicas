import {  addMatchUtilitis } from "../../utilitis/publication/addMatch.publication.utilitis.js";
import { deleteRequestsUtilitis } from "../../utilitis/publication/deleteRequests.publication.utilitis.js";

export const addMatchPublicationService = async ({publication, user}) => {
        try {
                addMatchUtilitis(publication, user.id)
                addMatchUtilitis(user, publication.id)
                
                deleteRequestsUtilitis(publication, user.id)
                deleteRequestsUtilitis(user, publication.id)
                
                await publication.save()
                await user.save()
                return
        } catch (err) {
                console.log(err)
                throw new Error(err.message)
        }
};
