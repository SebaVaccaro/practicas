export const outsidePublicationUserUtilitis = (user, publicationid) => {
    const check = user.publication.find(item=> item.toString() === publicationid)
    if(check)throw new Error("publicacion ya agregada")
    return
}