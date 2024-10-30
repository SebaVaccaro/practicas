export const isAdminPublicationUtilitis = (publication, userId) => {
    if(publication.createdBy !== userId)throw new Error("no tiene privilegio de adm")
    return
}