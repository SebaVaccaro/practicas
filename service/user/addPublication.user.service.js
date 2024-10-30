import { addPublicationUserUtilitis } from "../../utilitis/users/addPublication.user.utilitis.js"
export const addPublicationUserService = async ({publication, user}) => {
    try{
        addPublicationUserUtilitis(user, publication.id)
        await user.save()
        return
    }catch(err){
        console.error(err.message)
        throw new Error(err.message)
    }
}