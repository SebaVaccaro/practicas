export const addPublicationUserUtilitis = (user, publicationId) => {
    try{
        user.publication.push(publicationId)
    }catch(err){
        throw new Error(err)
    }
}