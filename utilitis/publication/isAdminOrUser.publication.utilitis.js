export const isAdminOrUserPublicationService = (publication, publicationList, userId) => {
    const isUser = publicationList.filter(item => item === userId)
    const isAdmin = publication.createdBy === userId
    if(isAdmin)return "isAdmin"
    if(isUser)return "user"
    throw new Error("usuario no autorizado")
}